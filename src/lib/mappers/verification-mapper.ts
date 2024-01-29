import { credentialResultResponse, credentialVerifierTypeResult } from "../model/verifiable-credential.js";

// @ts-ignore
import { gs1RulesResult,  gs1RulesResultContainer, credentialResults, gs1CredentialValidationRule, verificationResult, errorMessage } from '@gs1us/vc-verifier-rules';

// Build the verification credential result output
// Developer Note: verifiedResults Parameter is any because of the complex object structure returned from from DB Library 
export async function createVerificationResult(verifiedResults: any, gs1RulesResultContainer: gs1RulesResultContainer | undefined = undefined): Promise<verificationResult> {

    if (!!!verifiedResults) {
        return {
            verified: false,
            verifications: [{ title: "Proof", status: "bad"}],
            credentialResults: []
        };
    
    }

    const result: verificationResult = {
        verified: verifiedResults.verified,
        verifications: [],
        credentialResults: []
    };

    const credentialVerifierTypeResult: credentialVerifierTypeResult = {
        Proof: verifiedResults.verified,
        Revocation: true,
        gs1CredentialValidation: true
    }

    // Map Credential Results to simplified output object - include errors when present
    result.credentialResults = verifiedResults.credentialResults?.map( 
        (credential: credentialResultResponse) => { 
            // Map Proof Verification Results
           const credentialResult: credentialResults = {
                    verified: credential.verified, 
                    credentialId: credential.credentialId,
                    credentialName: '',
                    credentialValidationRules: []
            }

            if (credential.error) {

                credentialResult.error = credential.error.errors?.map( 
                    (errorData: any) => 
                        {
                            const error: errorMessage = {name: errorData.name, message: errorData.message};
                            return error;
                        }
                    );
            }

            // Map Revocation Result
            if (credential.statusResult) {
                if (credential.statusResult.Revocation) {
                    const revocationCheck = credential.statusResult.Revocation;

                    if (!revocationCheck.verified) {
                        credentialVerifierTypeResult.Revocation = revocationCheck.verified;
                    }
          
                    revocationCheck.messages.forEach((message: gs1CredentialValidationRule) => {
                        credentialResult.credentialValidationRules?.push(message);
                    });

                }
            }

            if (gs1RulesResultContainer) {

                const gs1RulesResult = gs1RulesResultContainer.result.find((result: gs1RulesResult) => result.credentialId === credential.credentialId);

                if (gs1RulesResult) {
                    credentialResult.credentialId = gs1RulesResult.credentialId;
                    credentialResult.credentialName = gs1RulesResult.credentialName;
                    credentialResult.verified = gs1RulesResult.verified;

                    if (!credentialResult.verified) {
                        credentialVerifierTypeResult.gs1CredentialValidation = credentialResult.verified;
                    }
                    
                    gs1RulesResult.errors.forEach((message: gs1CredentialValidationRule) => {
                        credentialResult.credentialValidationRules?.push(message);
                    });
                }
            }

            if (credentialResult.error?.length > 0) {
                credentialResult.verified = false;
            }

            if (!credentialResult.verified) {
                result.verified = false;
            }

            return credentialResult;
    });

    // Add Results for Resolve Credentials that are not in the presentation
    gs1RulesResultContainer?.result?.forEach((gs1RulesResult: gs1RulesResult) => { 
        const gs1RulesResultResolveCredential = result.credentialResults.find((result: gs1RulesResult) => result.credentialId === gs1RulesResult.credentialId);

        if (!gs1RulesResultResolveCredential) { 

            const credentialResult: credentialResults = {
                verified: gs1RulesResult.verified, 
                credentialId: gs1RulesResult.credentialId,
                credentialName: gs1RulesResult.credentialName,
                credentialValidationRules: gs1RulesResult.Errors
            }

             result.credentialResults.push(credentialResult);
        }
    });
    
    if (result.verifications) {
        // Add Verifier Type(s)
        result.verifications.push({ title: "Proof", status: credentialVerifierTypeResult.Proof ? "good": "bad"})

        if (typeof credentialVerifierTypeResult.Revocation !== 'undefined' ) {
            result.verifications.push({ title: "Revocation", status: credentialVerifierTypeResult.Revocation? "good": "bad"})
        }

        if (typeof credentialVerifierTypeResult.gs1CredentialValidation !== 'undefined' ) {
            result.verifications.push({ title: "GS1CredentialValidation", status: credentialVerifierTypeResult.gs1CredentialValidation ? "good": "bad"})
        }
    }
    

    return result;
}