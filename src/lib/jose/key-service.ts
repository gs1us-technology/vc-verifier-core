import * as jose from 'jose'

import * as transmute from '@transmute/verifiable-credentials';
import { getPublicKeyFromDid } from './did-resolver.js';

// Test Key Configuration and Types
export const alg = 'ES256'; // 'ES384'
export const issuer_0_key_type = 'application/jwk+json'
export const jose_mime_type_vc = 'application/vc-ld+jwt'
export const jose_mime_type_vp = "application/vp-ld+jwt"

// DID Configurations
export const DID_GS1_US = { did: "did:web:cbpvsvip-vc.gs1us.org", name: "GS1 US" };
export const DID_GS1_GLOBAL = { did: "did:web:id.gs1.org", name: "GS1 Global" };
export const DID_HEALTHY_TOTS = { did: "did:web:healthytots.net", name: "Healthy Tots" };
export const Issuing_DID_US = true;

export type DIDDocument = {
  key: Buffer;
  did: string;
  name: string;
}

export type proctectedHeader = {
  alg?: string,
  kid?: string,
  content: string
}

export const jwk: transmute.VerifierResolver = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolve: async ({ type, content }) => {

    // Get KID (Verification Method) from JWT Header (Protected Header
    const jwt_header = getProtectedHeader(content);

    // Look up DID Document for Public Key
    const did_publicKey = await getPublicKeyFromDid(jwt_header.kid);

    return {
      type: issuer_0_key_type,
      content: did_publicKey
    }
  }
}

// Get Protected Header from JWT by decoding and paring out header from JWT
// Prototype Assumption the VC is using a KID for the Verification Method
export const getProtectedHeader = (content: Uint8Array) : proctectedHeader => { 
 const decoded_vc = transmute.text.decoder.decode(content);
  
  // The following code is keep for debugging the header
  // const { 0: protectedHeader, 1: payload, 2: signature, length } = decoded_vc.split('.');
  // const jwt = { payload, protected: protectedHeader, signature };
  
  const decodeProtectedHeader = jose.decodeProtectedHeader(decoded_vc);
  return { alg: decodeProtectedHeader.alg, kid: decodeProtectedHeader.kid, content: decoded_vc}
}

