2.0.0 (2024-10-25)
---
BREAKING: Major Upgrade to Library to support WC3 Verifiable Credentials 2.0 enveloping proof [JOSE](https://www.w3.org/TR/vc-jose-cose/) securing mechanisms. 

- Updated library to use Transmute V2 Library for verification of enveloping proof [JOSE] verifiable credentials
- Refactored library to separate testing of Verifiable Credentials 1.0 data integrity into separate test suite
- Update Library to use latest GS1 US Verification Rule library for validation of GS1 Credentials. 

1.0.0 (2023-08-30)
---
Initial version of GS1 US Credential Core library for showing how to verify [WC3 Verifiable Credentials Data Model 1.1](https://www.w3.org/TR/vc-data-model/).
based Verifiable Credentials.

- Supported DID Methods
  - did:key
  - did:web
- Supported Linked Data Proof Suites
  - Ed25519Signature2020
  - Ed25519Signature2018
- Example Verifiable Credentials that pass or fail proof verification
- Example GS1 Verifiable Credentials
- Uses GS1 US [vc-verifier-rules engine](https://github.com/gs1us-technology/vc-verifier-rules) to validate GS1 Verifiable Credentials 
