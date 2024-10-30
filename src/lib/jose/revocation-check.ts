import * as jose from 'jose'
import * as transmute from '@transmute/verifiable-credentials';
import { getProtectedHeader, issuer_0_key_type, jose_mime_type_vc } from './key-service.js';
import { getPublicKeyFromDid } from './did-resolver.js';
import { getJwtCredential } from '../cache/local-cache.js';
import { statusVerifiedResponse } from '../model/verifiable-credential.js';
import { getJsonSchema } from './json-schema-service.js';

// Get Cached Revocation Credential
export function getRevocationStatusCredential(revocationUrI: string) : Buffer {
  const url = new URL(revocationUrI);

  if (!url) {
    throw new Error('No Revocation URL Found');
  }

  const pathname = url.pathname.split('/').filter(part => part !== '');
  const getRevocationStatusId = pathname[pathname.length - 1];

  const jwt = getJwtCredential(getRevocationStatusId);
  return Buffer.from(jwt);
}

// Short Circuit for Testing to be only work with known cached revocation
export const GS1US_REVOCATION_URL = "https://cbpvsvip-vc-api.gs1us.org/status/801c6cc6-4fc4-4aa3-a347-3b31a175ac14/";
export const GET_REVOKE_CREDENTIAL_FROM_SERVER = false;

export const revocationOverrideList = [
  "https://cbpvsvip-vc-api.gs1us.org/status/801c6cc6-4fc4-4aa3-a347-3b31a175ac14/",
  "https://healthytots.net/status/d6800dbc-9573-4522-bf54-dcea2813e661/",
  "https://id.gs1.org/vc/status/1"
];  

export function checkRevocationUrl(request: transmute.RequestVerify) : boolean {

  const encodedContent = transmute.text.decoder.decode(request.content);
  const checkRevocationStatusUrl = jose.decodeJwt(encodedContent);

  // eslint-disable-next-line
  // @ts-ignore Override TypeScript Rule to Handle Dynamic JWT Payload Object
  const revocationUrl = checkRevocationStatusUrl.credentialStatus ? checkRevocationStatusUrl.credentialStatus.statusListCredential.toString() : "Unknown";

  const isRevocationOverrideOn = revocationOverrideList.includes(revocationUrl);
  return isRevocationOverrideOn;
}

// Revocation Status Check using Transmute Library
// Short Circuit for Testing to be only work with known cached revocation
export async function checkJwtStatus(request: transmute.RequestVerify) : Promise<statusVerifiedResponse> { 

  const credentialValidation: statusVerifiedResponse  = {
    verified: true, 
    Revocation: { 
        verified: true, messages: [{ code: "VS-100", rule: "Verifiable Credential Status Check is Successful."}] 
      },
      schemaValidation: {
        verified: true,
        messages: [{ code: "VS-500", rule: "Verifiable Credential Schema Check is Successful."}] 
      }
  }

  // Check for Cached Revocation Credentials
  if (!checkRevocationUrl(request)) {
    return credentialValidation;
  }

  const validation = await transmute
    .validator({
      resolver: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        resolve: async ({ id, type, content }) => {

          // Check for JSON Schema ID
          const jsonSchema = getJsonSchema(id);
          if (jsonSchema) {
            return {
              type: `application/schema+json`,
              content: jsonSchema
            };
          }

          // Get Revocation Credential from Cache
          if (id?.length) {
            const revocation_Credential = getRevocationStatusCredential(id);
            return {
              type: jose_mime_type_vc,
              content: revocation_Credential
            }
          }

          // Get KID (Verification Method) from JWT Header (Protected Header
          const jwt_header = getProtectedHeader(request.content);
          
          // Look up DID Document for Public Key
          const did_publicKey = await getPublicKeyFromDid(jwt_header.kid);

          // Return Public Key for Validation 
          if (type === jose_mime_type_vc) {
            return {
              type: issuer_0_key_type,
              content: did_publicKey
            }
          }
          throw new Error('Unsupported resolver content')
        }
      }
    })
    .validate({
      type: jose_mime_type_vc,
      content: request.content
    })

  // Check for Revocation Status for for error conditions
  // Status valid value is based on the revocation stats: True means revoked, False means not revoked
  if (validation.status !== undefined) {
    credentialValidation.Revocation = { verified: true, messages: [] };

    Object.keys(validation.status).forEach((key) => { 
      const revocationValidation = validation.status[key];
      credentialValidation.verified = !revocationValidation.valid;

      if (!credentialValidation.verified ) {
        credentialValidation.Revocation.verified = false;
      }

      const ruleMessage = credentialValidation.verified 
        ? `Verifiable Credential Status Check for ${revocationValidation.purpose} is Successful.`
        : `Verifiable Credential Status Check for ${revocationValidation.purpose} failed.`;

      credentialValidation.Revocation?.messages.push({ code: "VS-100", rule: ruleMessage });
    });


  }

  // Check for Schema Validation for any errors 
  if (validation.schema !== undefined) {
    credentialValidation.schemaValidation = { verified: true, messages: [] };

    let schemaErrors = false;

    Object.keys(validation.schema).forEach((key) => { 
      const schemaValidation = validation.schema[key];
      if (schemaValidation && schemaValidation.errors) {
        for (const error of schemaValidation.errors) {
          schemaErrors = true;  
          credentialValidation.verified = false;
          credentialValidation.schemaValidation?.messages.push({ code: "VS-500", rule: `${error.instancePath} validation failed. ${error.message}` });
        }
      }
    });

    if (!schemaErrors) {
      credentialValidation.schemaValidation.messages.push({ code: "VS-500", rule: "Verifiable Credential Schema Check is Successful." });
    }


  }

  return credentialValidation;
}