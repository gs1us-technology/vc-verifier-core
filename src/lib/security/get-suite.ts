import {Ed25519Signature2020} from '@digitalbazaar/ed25519-signature-2020';
import {Ed25519Signature2018} from '@digitalbazaar/ed25519-signature-2018';
// @ts-ignore
import { Proof} from '@gs1us/vc-verifier-rules';

// For Verification return the suite based on the proof type used to issue the credential
// Developer Note: If proof type is missing or unsupported then default to Ed25519Signature2020
export function getVerificationSuite(proof: Proof) : unknown {

  if (proof?.type === "Ed25519Signature2018") {
    return new Ed25519Signature2018();
  }
  
  return new Ed25519Signature2020();
}
