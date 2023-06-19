export const gs1DidDocument = {
    "didDocument": {
        "@context": [
          "https://www.w3.org/ns/did/v1",
          "https://w3id.org/security/suites/ed25519-2020/v1",
          "https://w3id.org/security/suites/x25519-2020/v1"
        ],
        "id": "did:web:did-vc.gs1us.org",
        "verificationMethod": [
          {
            "id": "did:web:did-vc.gs1us.org#z6MktUaqHwUoYmaGecQ96ezqpHeSR7C2pUsWQqwtRFx8RzCj",
            "type": "Ed25519VerificationKey2020",
            "controller": "did:web:did-vc.gs1us.org",
            "publicKeyMultibase": "z6MktUaqHwUoYmaGecQ96ezqpHeSR7C2pUsWQqwtRFx8RzCj"
          }
        ],
        "authentication": [
          "did:web:did-vc.gs1us.org#z6MktUaqHwUoYmaGecQ96ezqpHeSR7C2pUsWQqwtRFx8RzCj"
        ],
        "assertionMethod": [
          "did:web:did-vc.gs1us.org#z6MktUaqHwUoYmaGecQ96ezqpHeSR7C2pUsWQqwtRFx8RzCj"
        ],
        "capabilityDelegation": [
          "did:web:did-vc.gs1us.org#z6MktUaqHwUoYmaGecQ96ezqpHeSR7C2pUsWQqwtRFx8RzCj"
        ],
        "capabilityInvocation": [
          "did:web:did-vc.gs1us.org#z6MktUaqHwUoYmaGecQ96ezqpHeSR7C2pUsWQqwtRFx8RzCj"
        ],
        "keyAgreement": [
          {
            "id": "did:web:did-vc.gs1us.org#z6LSoo35g8X6zBVzdgcog5ao9EuvHsR5qMrhFgQzeiRjUpi1",
            "type": "X25519KeyAgreementKey2020",
            "controller": "did:web:did-vc.gs1us.org",
            "publicKeyMultibase": "z6LSoo35g8X6zBVzdgcog5ao9EuvHsR5qMrhFgQzeiRjUpi1"
          }
        ]
      }
}
