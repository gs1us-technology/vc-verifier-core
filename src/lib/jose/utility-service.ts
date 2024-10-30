import * as transmute from '@transmute/verifiable-credentials';

export type verifiableCredentialMetaData = {
    proofType: "Embed" | "Envelope" | "Unknown";
    content?: string;
  }

// Check to see if the Verifiable Credential has an Embedded or Enveloped Proof
export function getVerifiableCredentialMetaData (content: string) : verifiableCredentialMetaData { 
  
    const metaDataResult: verifiableCredentialMetaData = {
      proofType: "Unknown",
      content: undefined
    }
  
    const contentBuffer = Buffer.from(content);
    const decodedContent = transmute.text.decoder.decode(contentBuffer);
    const { length } = decodedContent.split('.');
  
    if (length === 3) {
      metaDataResult.proofType = "Envelope";
    } else {

        try {
            const jsonContent = JSON.parse(content);
            if (jsonContent.proof) {
                metaDataResult.proofType = "Embed";
            }
        } catch (error) {
            // Developer Notes: We only care if the content is either JSON or JWT
            // If the JSON parse fails, then the proof type is unknown
            metaDataResult.proofType = "Unknown";
        }
    }
    metaDataResult.content = content;
  
    return metaDataResult;
  }