export const prefixLicenceCredential08 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://ref.gs1.org/gs1/vc/licence-context",
    "https://w3id.org/security/suites/ed25519-2020/v1",
    {
      "name": "https://schema.org/name",
      "description": "https://schema.org/description",
      "image": "https://schema.org/image"
    }
  ],
  "issuer": {
    "id": "did:web:id.gs1.org",
    "image": "https://ref.gs1.org/logos/gs1logo.png",
    "name": "GS1"
  },
  "name": "GS1 Prefix Licence",
  "description": "FOR DEMONSTRATION PURPOSES ONLY: NOT TO BE USED FOR PRODUCTION GRADE SYSTEMS! A company prefix that complies with GS1 Standards (a “GS1 Company Prefix”) is a unique identification number that is assigned to just your company by GS1 US. It’s the foundation of GS1 Standards and can be found in all of the GS1 Identification Numbers.",
  "issuanceDate": "2022-11-30T16:14:39.673Z",
  "id": "https://id.gs1.org/licence/gs1_prefix/08",
  "type": [
    "VerifiableCredential",
    "GS1PrefixLicenceCredential"
  ],
  "credentialSubject": {
    "id": "did:web:cbpvsvip-vc.gs1us.org",
    "partyGLN": "0614141000005",
    "organizationName": {
      "language": "en",
      "value": "GS1 US"
    },
    "licenceValue": "08",
    "alternativeLicenceValue": "8"
  },
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2022-11-30T16:14:39Z",
    "verificationMethod": "did:web:id.gs1.org#z6MkmyW9bMwkNv2imXTkdU36HEBKAgdk3zDcKCarXJPHgNfM",
    "proofPurpose": "assertionMethod",
    "proofValue": "z229R18jSjpenWSaJ6rLH6r3UK6Z1WJLJFUHCCBgYeYZevstB8a77NrxkuYcvh67bKbm4KkLFjaZfZUvMuQHydrhw"
  }
}