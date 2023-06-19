// @ts-ignore
import { VerifiableCredential, errorMessage, gs1CredentialValidationRule} from '@gs1us/vc-verifier-rules';

// @context: is a complex object that can be an array that contains strings or objects
export type resultProof = {
    '@context': (string | any)[];
    type: string;
    created: string;
    verificationMethod: string;
    proofPurpose: string;
    proofValue: string;
}

export type proofResult = {
    valid: boolean;
}

// @context: is a complex object that can be an array that contains strings or objects
export type verificationMethod = {
    '@context': (string | any)[];
    id: string;
    type: string;
    controller: string;
    publicKeyMultibase: string;
}

// @context: is a complex object that can be an array that contains strings or objects
export type resultResponse = {
    '@context': (string | any)[];
    type: string[];
    verifiableCredential: VerifiableCredential[];
}

export type credentialResult = {
    proof: resultProof;
    verified: boolean;
    verificationMethod: verificationMethod;
    purposeResult: proofResult;
}

export type statusResult = {
    verified: boolean;
    messages: gs1CredentialValidationRule[];
}

export type statusVerifiedResponse = {
    verified: boolean;
    Revocation: statusResult;
    gs1CredentialCheck?: statusResult;
}

export type errorResponse = {
    name: string;
    message: string;
    errors: errorMessage[];
}

export type credentialResultResponse = {
    verified: boolean;
    results: credentialResult[];
    credentialId: string;
    credentialName: string;
    statusResult: statusVerifiedResponse;
    error: errorResponse;
}

export type presentationResultsResponse = {
    verified: boolean;
    results: resultResponse[];
    credentialResults: credentialResultResponse[];
}

export type credentialVerifierTypeResult = {
    Proof: boolean;
    Revocation: boolean | unknown;
    gs1CredentialValidation: boolean | unknown;
}