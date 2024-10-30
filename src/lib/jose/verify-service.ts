import * as jose from 'jose'
import * as transmute from '@transmute/verifiable-credentials';
import { jose_mime_type_vc, jose_mime_type_vp, jwk } from './key-service.js';
import { GS1CredentialValidationOptions, gs1Validator } from '../services/gs1-credential-service.js';
import { createVerificationResult } from '../data-integrity/mappers/verification-mapper.js';
import { gs1RulesResultContainer, VerifiableCredential, VerifiablePresentation, verificationResult } from '@gs1us/vc-verifier-rules/dist/index.js';
import { validateJoseCredential } from './credential-validator.js';
import { statusVerifiedResponse } from '../model/verifiable-credential.js';

// Custom Type for verify credential result
export type verifyCredentialResult = {
  verified: boolean,
  credentialId?: string | unknown,
  // eslint-disable-next-line
  result? : any,
  claims?: jose.JWTPayload
  statusResult?: statusVerifiedResponse,
  // eslint-disable-next-line
  error?:  any
}

// Parse out the Credential ID from the envelope
// Format for parsing is data:{mediaType}/{token}
function parseEnvelopeCredential(credential: transmute.EnvelopedVerifiableCredential): string {
  const idContents = credential.id.split(";");
  const token = idContents[1];
  return token;
}

// Verify an Individual JOSE Credential
// The Transmute Library will decode the JWT and verify the signature
export async function verifyEnvelopeCredential(content: string , options: GS1CredentialValidationOptions = { credentialType: "JOSE" }): Promise<verificationResult> {
   
    const defaultResult: verificationResult = { verified: false};
    const credentialValidationResult = { result: defaultResult};
    const credentialResults: verifyCredentialResult[] = [];

    const gs1CredentialContainer: gs1RulesResultContainer = {
      verified:false,
      result: []
    };

    try {

      // verify Envelope Credential
      const signedCredential = Buffer.from(content);
      const verifiedResults = await verifyCredential({ type: jose_mime_type_vc, content: signedCredential},  jwk);
     
      if (verifiedResults.verified)   {

        // Check GS1 Credential Validation Rules
        const validator = gs1Validator(options);
        const rulesCheckResult = await validator.checkGS1Credential(verifiedResults.result);

        gs1CredentialContainer.verified = rulesCheckResult.verified;
        gs1CredentialContainer.result.push(rulesCheckResult);
    } 
    
    // Decode JWT to Get Credential Metadata -
    const claims = verifiedResults.verified ? jose.decodeJwt(content)  : { id: "unknown"};

    credentialResults.push({
      verified: verifiedResults.verified,
      credentialId: claims.id,
      statusResult: verifiedResults.statusResult,
      claims: claims,
      error: verifiedResults.verified ? undefined : verifiedResults.error
    });

    const envelopeResult = {
      verified: verifiedResults.verified,
      error: undefined,
      credentialResults: credentialResults
    };

    credentialValidationResult.result = await createVerificationResult(envelopeResult, gs1CredentialContainer);
  } catch (error) {
      credentialValidationResult.result = defaultResult;
 }

  return credentialValidationResult.result
} 

// Verify a JOSE (JWT) Presentation. Once the envelope is verified, the individual credentials are verified
// For each GS1 Credential type in the presentation, the GS1 Validation Rules and chain are checked
export async function verifyEnvelopePresentation(content: string , options: GS1CredentialValidationOptions = { credentialType: "JOSE" }): Promise<verificationResult> {

    // verify Presentation (Envelope)
    const signedPresentation = Buffer.from(content);
    const verifiedResults = await transmute.
      verifier({
        resolver: jwk
      })
      .verify<transmute.VerifiablePresentationWithHolderObject & transmute.VerifiablePresentationOfEnveloped>({
        type: jose_mime_type_vp,
        content: signedPresentation
      });

      // Setup Default Presentation Verification Result
      const defaultResult: verificationResult = { verified: false};
      const credentialValidationResult = { result: defaultResult};
      credentialValidationResult.result.verified = true;

      // Process Each Credential in the Presentation 
      // by checking signature, revocation and schema
      // For GS1 based credentials the GS1 Validation Rules and Chain will be checked
      const credentialResults: verifyCredentialResult[] = [];
      const credentialsInPresentation: VerifiableCredential[] = [];

      for await (const credential of verifiedResults.verifiableCredential) {
        const token = parseEnvelopeCredential(credential);
        const claims = jose.decodeJwt(token)
        const signedCredential = Buffer.from(token);

        const verifiedResults = await verifyCredential({ type: jose_mime_type_vc, content: signedCredential},  jwk);

        // If any credential is not validate mark the whole presentation as invalid
        if (verifiedResults.verified === false) {
          credentialValidationResult.result.verified = false;
         }
       
        // Map Verification Results to Presentation Validation Result
        credentialResults.push({
          verified: verifiedResults.verified,
          credentialId: claims.id,
          statusResult: verifiedResults.statusResult,
          claims: claims
        });

        // Developer Note: Workaround to handle Dynamic Claims (Credential Subject)
        // eslint-disable-next-line
        const credentialClaims: any = claims;
        credentialsInPresentation.push(credentialClaims);
       }

        // Create a Verifiable Presentation Object to Validate GS1 Rules
       const gs1PresentationToValidate: VerifiablePresentation = {
          '@context': ["Test"],
          id: verifiedResults.id,
          holder: verifiedResults.holder.id,
          type: verifiedResults.type,
          verifiableCredential: credentialsInPresentation
       };

      // Check GS1 Credential Validation Rules
      const validator = gs1Validator(options);
      const rulesCheckResult = await validator.verifyGS1Credentials(gs1PresentationToValidate);

       const envelopeResult = {
          verified: credentialValidationResult.result.verified,
          error: undefined,
          credentialResults: credentialResults
        };

      credentialValidationResult.result = await createVerificationResult(envelopeResult, rulesCheckResult);
      return credentialValidationResult.result;
}

// Used for Generic Proof Verification Errors
function getCredentialResultError(errorMessage: string): verifyCredentialResult {

  return {
    verified: false,
    result: undefined,
    statusResult: undefined,
    error: { errors: [{ name: "VC-000", message: errorMessage}]}
  }

}

// Verify the JOSE (JWT) Signature, Check Revocation and Schema
export async function verifyCredential(request: transmute.RequestVerify, resolver: transmute.VerifierResolver): Promise<verifyCredentialResult> { 
  
   let verifiableCredentialResult: verifyCredentialResult = { 
      verified:false
    };

  try {

    const verified = await transmute.
    verifier({
      resolver: resolver
    })
    .verify<transmute.VerifiableCredentialWithIssuerObject>({
      type: request.type,
      content: request.content,
    })

    // Validate Credential Revocation Status and JSON Schema
    const revocationStatus = await validateJoseCredential(request); 

    if (verified) {
      const isVerificationValid = verified && revocationStatus.verified;

      verifiableCredentialResult.verified = isVerificationValid ? isVerificationValid : false;
      verifiableCredentialResult.result = verified;
      verifiableCredentialResult.statusResult = revocationStatus;

    } else {
      verifiableCredentialResult = getCredentialResultError("Proof Verification Failed!");
    }

  } catch (error) { 
    const errorMessage = error instanceof Error ? error.message : "Unknown Error";
    verifiableCredentialResult = getCredentialResultError(errorMessage);
  }

  return verifiableCredentialResult;

}
