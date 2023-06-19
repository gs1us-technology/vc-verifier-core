import * as vc from '@digitalbazaar/vc';
import { getVerificationSuite } from './security/get-suite.js';
import { documentLoader } from './document-loader/documentLoader.js';
import { checkStatus } from './check-status.js';
import { createVerificationResult } from './mappers/verification-mapper.js';
import { verifyGS1Credentials } from './gs1-credential-service.js';

// @ts-ignore
import { VerifiableCredential, VerifiablePresentation, verificationResult } from '@gs1us/vc-verifier-rules'

// Create an unsigned presentation for the verification process
// Developer Note: Will Use verifiableCredential Id/Subject ID for Holder Information
const generatePresentationUnsigned = async function(verifiableCredential: VerifiableCredential) {

    const id = verifiableCredential.id
    const holderSubject = verifiableCredential.credentialSubject.id;

    const presentation = vc.createPresentation({
        verifiableCredential, id, holderSubject
    });

    return presentation;
}

// Verifier a credential - this is used by both the API and as a callback for resolved extended credential
// Developer Note: This method verifies a credential directly with the Digital Bazaar VC Library without wrapping it in validation results
export async function verifyCredential_Direct(credentials: VerifiableCredential): Promise<any> {

    // Setup unsigned presentation for verification
    const presentation = await generatePresentationUnsigned(credentials);
    const challenge = "unknown";

    // Setup Suite for verification
    const proof = presentation.proof;
    const suite = await getVerificationSuite(proof);

    const verifiedResults = 
    await vc.verify({presentation, unsignedPresentation: presentation, challenge, suite: suite, documentLoader, checkStatus}); // as credentialResult;
    return verifiedResults;
 }


// Verifier a credential - this is used by both the API and as a callback for resolved extended credential
// Developer Note: Will Wrap the credential in a presentation prior to verification
export async function verifyCredential(credentials: VerifiableCredential): Promise<verificationResult> {

    // Setup unsigned presentation for verification
    const presentation = await generatePresentationUnsigned(credentials);
    const challenge = "unknown";

    // Setup Suite for verification
    const proof = presentation.proof;
    const suite = await getVerificationSuite(proof);

    // Proof and Revocation Checks
    const verifiedResults = 
    await vc.verify({presentation, unsignedPresentation: presentation, challenge, suite: suite, documentLoader, checkStatus}); // as credentialResult;

    // Validate Any GS1 Credentials in the presentation
    const rulesCheckResult = await verifyGS1Credentials(presentation);
    return await createVerificationResult(verifiedResults, rulesCheckResult);
 }

 // Verify a signed Verifiable Presentation
 export async function verifyPresentation(presentation: VerifiablePresentation): Promise<verificationResult> {

    const proof = presentation.proof;
    const challenge = proof.challenge;
    const suite = await getVerificationSuite(proof);

    // Proof and Revocation Checks
    const verifiedResults = await vc.verify({presentation, challenge, suite: suite, documentLoader, checkStatus}); // as credentialResult;

    // Validate Any GS1 Credentials in the presentation
    const rulesCheckResult = await verifyGS1Credentials(presentation);

    return await createVerificationResult(verifiedResults, rulesCheckResult);
 }