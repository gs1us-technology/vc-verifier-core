import { documentLoader } from "./document-loader/documentLoader.js";
import { verifyCredential_Direct } from "./index.js";

import { checkGS1CredentialPresentation, 
        checkGS1CredentialWithoutPresentation, 
        externalCredential, 
        verifyExternalCredential, 
        gs1RulesResult,  
        gs1RulesResultContainer, 
        verificationErrorCode, 
        VerifiableCredential,
        VerifiablePresentation } 
    // @ts-ignore
    from '@gs1us/vc-verifier-rules';

// Callback function to resolve external credential using the document loader 
const getExternalCredential: externalCredential = async (url: string) : Promise<VerifiableCredential> => {
    const extendedVC = await documentLoader(url);
    return extendedVC.document;
}

// Callback function to verify external credential to ensure the VC passes proof, revocation and GS1 Rules
const checkExternalCredential: verifyExternalCredential = async (credential: VerifiableCredential) : Promise<gs1RulesResult> => {
    const verificationResult =  await verifyCredential_Direct(credential);

    // Developer Note: Since we are only checking a single credential we can assume the first credential result is the one we want to check
    let validationErrors: any[] = [];
    if (verificationResult.credentialResults.length > 0) {
            validationErrors = verificationResult.credentialResults[0].error?.errors.map( (error: any) => {
                return { code: verificationErrorCode, rule: error.message, isValid: false };
        });
    }

    // Check GS1 Rules for external credential
    const gs1RulesResult = await checkGS1Credential(credential);

    // Merge Verification Errors with GS1 Rules Errors
    if  (validationErrors && validationErrors.length > 0) {
        gs1RulesResult.errors.push(...validationErrors);
        gs1RulesResult.verified = false;
    }

    return gs1RulesResult;
}


// Check if the Verifiable Credential is a GS1 Credential and if so check the GS1 Credential Rules
export async function checkGS1Credential(verifiableCredential: VerifiableCredential) : Promise <gs1RulesResult> {
    return await checkGS1CredentialWithoutPresentation(getExternalCredential, checkExternalCredential, verifiableCredential);
}

// Check if the Verifiable Presentation for any GS1 Credential and if so check the GS1 Credential Rules
export async function verifyGS1Credentials(verifiablePresentation: VerifiablePresentation) : Promise<gs1RulesResultContainer> {
    return await checkGS1CredentialPresentation(getExternalCredential, checkExternalCredential, verifiablePresentation);
}
