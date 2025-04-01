import * as jose from 'jose'

//-- https://www.npmjs.com/package/@transmute/verifiable-credentials
import * as transmute from '@transmute/verifiable-credentials';
import { getProtectedHeader, issuer_0_key_type, jose_mime_type_vc } from './key-service.js';
import { getPublicKeyFromDid } from './did-resolver.js';
import { addFileFromLocalDataCache, getJwtCredentiaByUrl, getJwtCredential } from '../cache/local-cache.js';
import { statusVerifiedResponse } from '../model/verifiable-credential.js';
import { getJsonSchema } from './json-schema-service.js';
import { GET_REVOKE_CREDENTIAL_FROM_SERVER, GS1US_REVOCATION_URL, revocationOverrideList } from './revocation-check.js';

export const downloadRevocation = async function(revocationUrI: string) : Promise<string> {

  // Check for Cached Revocation Credentials
  const jwt = getJwtCredentiaByUrl(revocationUrI);
  if (jwt !== undefined) {
    return jwt;
  }

  const response = await fetch(revocationUrI, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const fetchedJwt = await response.text();
  addFileFromLocalDataCache(revocationUrI, fetchedJwt);

  return fetchedJwt;

}

// Get Cached Revocation Credential
export async function getRevocationStatusCredential(revocationUrI: string) : Promise<Buffer> {
  const url = new URL(revocationUrI);

  if (!url) {
    throw new Error('No Revocation URL Found');
  }

  // Fetch Revocation Credential from Server
  if (GET_REVOKE_CREDENTIAL_FROM_SERVER && revocationUrI === GS1US_REVOCATION_URL) {
    const fetchedJwt = await downloadRevocation(revocationUrI);
    return Buffer.from(fetchedJwt);
  }

  const pathname = url.pathname.split('/').filter(part => part !== '');
  const getRevocationStatusId = pathname[pathname.length - 1];

  const jwt = getJwtCredential(getRevocationStatusId);
  return Buffer.from(jwt);
}

export function checkRevocationUrl(request: transmute.RequestVerify) : boolean {

  const encodedContent = transmute.text.decoder.decode(request.content);
  const checkRevocationStatusUrl = jose.decodeJwt(encodedContent);

  // eslint-disable-next-line
  // @ts-ignore -- Allow Revocation URL to Be Unknown
  const revocationUrl = checkRevocationStatusUrl.credentialStatus ? checkRevocationStatusUrl.credentialStatus.statusListCredential.toString() : "Unknown";

  const isRevocationOverrideOn = revocationOverrideList.includes(revocationUrl);

  if (!isRevocationOverrideOn)  {
    console.log(`Revocation URL: ${revocationUrl} is not in the Override List`);
  }
  return isRevocationOverrideOn;
}

// Revocation Status Check using Transmute Library
// Short Circuit for Testing to be only work with known cached revocation
export async function validateJoseCredential(request: transmute.RequestVerify) : Promise<statusVerifiedResponse> { 

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

  // Only Check Revocation for Cache Status Check Credentials
  if (!checkRevocationUrl(request)) {
    return credentialValidation;
  }

  try {
    const validation = await transmute
      .validator({
        resolver: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          resolve: async ({ id, type, content, purpose }) => {


            // Developer Note: Returning True Overrides and Skips Schema Validation
            if (purpose === 'schema-validation') {
              // Check for JSON Schema ID
              const jsonSchema = getJsonSchema(id);
              if (jsonSchema) {
                return {
                  type: `application/schema+json`,
                  content: jsonSchema
                };
              }
            }

            if (purpose === 'status-check') {
              // Get Revocation Credential from Cache
              if (id?.length) {
                const revocation_Credential = await getRevocationStatusCredential(id);
                return {
                  type: jose_mime_type_vc,
                  content: revocation_Credential
                }
              }
            }

            if (purpose === 'verification-material') {
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
        credentialValidation.verified = !revocationValidation.revocation;

        if (!credentialValidation.verified ) {
          credentialValidation.Revocation.verified = false;
        }

        const ruleMessage = credentialValidation.verified 
          ? `Verifiable Credential Status Check is Successful.`
          : `Verifiable Credential Status Check for ${revocationValidation.purpose} failed.`;

        credentialValidation.Revocation?.messages.push({ code: "VS-100", rule: ruleMessage });
      });
    }

  // Check for Schema Validation for any errors 
  if (validation.schema !== undefined) {
    credentialValidation.schemaValidation = { verified: false, messages: [] };

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
      credentialValidation.schemaValidation.verified = true;
      credentialValidation.schemaValidation.messages.push({ code: "VS-500", rule: "Verifiable Credential Schema Check is Successful." });
    }

  }
  } catch (error) { 
    // Handle Cases where Revocation or Schema Validation return an exception
    credentialValidation.verified = false;
    credentialValidation.Revocation = { verified: false, messages: [] };
    credentialValidation.Revocation.messages.push({ code: "VS-100", rule: "Verifiable Credential Status Check failed." });
  }

  return credentialValidation;
}