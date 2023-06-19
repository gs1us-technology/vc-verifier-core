import { documentLoader } from "./document-loader/documentLoader.js";
import { statusVerifiedResponse } from "./model/verifiable-credential.js";

// Check Status Method called from the Digital Bazaar VC Library 
export const checkStatus = async (signedVP: any): Promise <statusVerifiedResponse> => {
    {

    return { 
        verified: true, 
        Revocation: { 
            verified: true, messages: [{ code: "VS-100", rule: "Verification Status", isValid: true}] }, 
        };
     };
}
