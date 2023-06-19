export const ed255192018 = {
    "@context": [
      {
        "@version": 1.1
      },
      "https://w3id.org/security/v1",
      {
        "AesKeyWrappingKey2019": "sec:AesKeyWrappingKey2019",
        "DeleteKeyOperation": "sec:DeleteKeyOperation",
        "DeriveSecretOperation": "sec:DeriveSecretOperation",
        "EcdsaSecp256k1Signature2019": "sec:EcdsaSecp256k1Signature2019",
        "EcdsaSecp256r1Signature2019": "sec:EcdsaSecp256r1Signature2019",
        "EcdsaSecp256k1VerificationKey2019": "sec:EcdsaSecp256k1VerificationKey2019",
        "EcdsaSecp256r1VerificationKey2019": "sec:EcdsaSecp256r1VerificationKey2019",
        "Ed25519Signature2018": "sec:Ed25519Signature2018",
        "Ed25519VerificationKey2018": "sec:Ed25519VerificationKey2018",
        "EquihashProof2018": "sec:EquihashProof2018",
        "ExportKeyOperation": "sec:ExportKeyOperation",
        "GenerateKeyOperation": "sec:GenerateKeyOperation",
        "KmsOperation": "sec:KmsOperation",
        "RevokeKeyOperation": "sec:RevokeKeyOperation",
        "RsaSignature2018": "sec:RsaSignature2018",
        "RsaVerificationKey2018": "sec:RsaVerificationKey2018",
        "Sha256HmacKey2019": "sec:Sha256HmacKey2019",
        "SignOperation": "sec:SignOperation",
        "UnwrapKeyOperation": "sec:UnwrapKeyOperation",
        "VerifyOperation": "sec:VerifyOperation",
        "WrapKeyOperation": "sec:WrapKeyOperation",
        "X25519KeyAgreementKey2019": "sec:X25519KeyAgreementKey2019",
        "allowedAction": "sec:allowedAction",
        "assertionMethod": {
          "@id": "sec:assertionMethod",
          "@type": "@id",
          "@container": "@set"
        },
        "authentication": {
          "@id": "sec:authenticationMethod",
          "@type": "@id",
          "@container": "@set"
        },
        "capability": {
          "@id": "sec:capability",
          "@type": "@id"
        },
        "capabilityAction": "sec:capabilityAction",
        "capabilityChain": {
          "@id": "sec:capabilityChain",
          "@type": "@id",
          "@container": "@list"
        },
        "capabilityDelegation": {
          "@id": "sec:capabilityDelegationMethod",
          "@type": "@id",
          "@container": "@set"
        },
        "capabilityInvocation": {
          "@id": "sec:capabilityInvocationMethod",
          "@type": "@id",
          "@container": "@set"
        },
        "caveat": {
          "@id": "sec:caveat",
          "@type": "@id",
          "@container": "@set"
        },
        "challenge": "sec:challenge",
        "ciphertext": "sec:ciphertext",
        "controller": {
          "@id": "sec:controller",
          "@type": "@id"
        },
        "delegator": {
          "@id": "sec:delegator",
          "@type": "@id"
        },
        "equihashParameterK": {
          "@id": "sec:equihashParameterK",
          "@type": "xsd:integer"
        },
        "equihashParameterN": {
          "@id": "sec:equihashParameterN",
          "@type": "xsd:integer"
        },
        "invocationTarget": {
          "@id": "sec:invocationTarget",
          "@type": "@id"
        },
        "invoker": {
          "@id": "sec:invoker",
          "@type": "@id"
        },
        "jws": "sec:jws",
        "keyAgreement": {
          "@id": "sec:keyAgreementMethod",
          "@type": "@id",
          "@container": "@set"
        },
        "kmsModule": {
          "@id": "sec:kmsModule"
        },
        "parentCapability": {
          "@id": "sec:parentCapability",
          "@type": "@id"
        },
        "plaintext": "sec:plaintext",
        "proof": {
          "@id": "sec:proof",
          "@type": "@id",
          "@container": "@graph"
        },
        "proofPurpose": {
          "@id": "sec:proofPurpose",
          "@type": "@vocab"
        },
        "proofValue": "sec:proofValue",
        "referenceId": "sec:referenceId",
        "unwrappedKey": "sec:unwrappedKey",
        "verificationMethod": {
          "@id": "sec:verificationMethod",
          "@type": "@id"
        },
        "verifyData": "sec:verifyData",
        "wrappedKey": "sec:wrappedKey"
      }
    ]
  }

  export const ed25519_signature_2018_v1 = {
    "@context": {
      "id": "@id",
      "type": "@type",
      "@protected": true,
      "proof": {
        "@id": "https://w3id.org/security#proof",
        "@type": "@id",
        "@container": "@graph"
      },
      "Ed25519VerificationKey2018": {
        "@id": "https://w3id.org/security#Ed25519VerificationKey2018",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "controller": {
            "@id": "https://w3id.org/security#controller",
            "@type": "@id"
          },
          "revoked": {
            "@id": "https://w3id.org/security#revoked",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
          },
          "publicKeyBase58": {
            "@id": "https://w3id.org/security#publicKeyBase58"
          }
        }
      },
      "Ed25519Signature2018": {
        "@id": "https://w3id.org/security#Ed25519Signature2018",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "challenge": "https://w3id.org/security#challenge",
          "created": {
            "@id": "http://purl.org/dc/terms/created",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
          },
          "domain": "https://w3id.org/security#domain",
          "expires": {
            "@id": "https://w3id.org/security#expiration",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
          },
          "nonce": "https://w3id.org/security#nonce",
          "proofPurpose": {
            "@id": "https://w3id.org/security#proofPurpose",
            "@type": "@vocab",
            "@context": {
              "@protected": true,
              "id": "@id",
              "type": "@type",
              "assertionMethod": {
                "@id": "https://w3id.org/security#assertionMethod",
                "@type": "@id",
                "@container": "@set"
              },
              "authentication": {
                "@id": "https://w3id.org/security#authenticationMethod",
                "@type": "@id",
                "@container": "@set"
              },
              "capabilityInvocation": {
                "@id": "https://w3id.org/security#capabilityInvocationMethod",
                "@type": "@id",
                "@container": "@set"
              },
              "capabilityDelegation": {
                "@id": "https://w3id.org/security#capabilityDelegationMethod",
                "@type": "@id",
                "@container": "@set"
              },
              "keyAgreement": {
                "@id": "https://w3id.org/security#keyAgreementMethod",
                "@type": "@id",
                "@container": "@set"
              }
            }
          },
          "jws": {
            "@id": "https://w3id.org/security#jws"
          },
          "verificationMethod": {
            "@id": "https://w3id.org/security#verificationMethod",
            "@type": "@id"
          }
        }
      }
    }
  }