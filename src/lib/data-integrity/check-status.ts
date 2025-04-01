import { VerifiablePresentation } from "@transmute/verifiable-credentials";
import { statusVerifiedResponse } from "../model/verifiable-credential.js";

// Check Status Method called from the Digital Bazaar VC Library 
// Revocation Status Check is not implemented until we upgrade to the new Digital Bazaar Data Model 2.0 Library 
export const checkStatus = async (signedVP: VerifiablePresentation): Promise <statusVerifiedResponse> => {
    {

        const revocationCheckResponse =  { 
            verified: true, 
            Revocation: { 
                verified: true, messages: [{ code: "VS-100", rule: "Verification Status"}] }, 
            };

        if (signedVP === undefined) {
            revocationCheckResponse.verified = false;
            revocationCheckResponse.Revocation.verified = false;
            revocationCheckResponse.Revocation.messages = [{ code: "VS-101", rule: "Verifiable Credential Status Check failed"}];

        }

        return revocationCheckResponse;
     };
}
