// Standard Node Module - Used for testing
import { createVerificationResult } from "../lib/mappers/verification-mapper.js";

// @ts-ignore
import { gs1RulesResultContainer, verificationResult } from '@gs1us/vc-verifier-rules';

const vcResultPass_ToMap = {
    "verified": true,
    "results": [     
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1"
            ],
            "type": [
                "VerifiablePresentation"
            ],
            "verifiableCredential": [
                {
                    "@context": [
                        "https://www.w3.org/2018/credentials/v1",
                        "https://ref.gs1.org/gs1/vc/licence-context",
                        "https://w3id.org/security/suites/ed25519-2020/v1",
                        {
                            "name": "https://schema.org/name",
                            "description": "https://schema.org/description",
                            "image": "https://schema.org/image"
                        },
                        "https://w3id.org/vc-revocation-list-2020/v1"
                    ],
                    "issuer": "did:web:cbpvsvip-vc.gs1us.org",
                    "name": "GS1 Company Prefix Licence",
                    "description": "THIS GS1 DIGITAL LICENSE CREDENTIAL IS FOR TESTING PURPOSES ONLY. A GS1 Company Prefix Licence is issued by a GS1 Member Organisation or GS1 Global Office and allocated to a user company or to itself for the purpose of generating tier 1 GS1 identification keys.",
                    "issuanceDate": "2021-05-11T10:50:36.701Z",
                    "id": "http://did-vc.gs1us.org/vc/licence/08600057694",
                    "type": [
                        "VerifiableCredential",
                        "GS1CompanyPrefixLicenceCredential"
                    ],
                    "credentialSubject": {
                        "id": "did:key:z6MkoANbT3Pmg2MBEd9JHrK4wY8JMgzgpjXRdMumva15H2Yx/1",
                        "organizationName": {
                            "value": "Healthy Tots"
                        },
                        "extendsCredential": "https://did-vc.gs1.org/vc/licence/gs1_prefix/08",
                        "licenceValue": "08600057694",
                        "alternativeLicenceValue": "8600057694"
                    },
                    "credentialStatus": {
                        "id": "https://cbpvsvip-vc.dev.gs1us.org/status/2c0a1f02-d545-481b-902a-1e919cd706e2/1",
                        "type": "RevocationList2020Status",
                        "revocationListIndex": 1,
                        "revocationListCredential": "https://cbpvsvip-vc.dev.gs1us.org/status/2c0a1f02-d545-481b-902a-1e919cd706e2/"
                    },
                    "proof": {
                        "type": "Ed25519Signature2020",
                        "created": "2023-03-02T18:00:40Z",
                        "verificationMethod": "did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt",
                        "proofPurpose": "assertionMethod",
                        "proofValue": "z5psp5E44P3ASSk9y7nhg9x24ny5BKBmPYeEHRMdm3rcnyAM393YFeVY4fmy4xfqbT5khfAqMrGZUzAjHCYb4XigH"
                    }
                }
            ],
            "id": "http://did-vc.gs1us.org/vc/licence/08600057694"
        }
    ],
    "credentialResults": [
        {
            "verified": true,
            "results": [
                {
                    "proof": {
                        "@context": [
                            "https://www.w3.org/2018/credentials/v1",
                            "https://ref.gs1.org/gs1/vc/licence-context",
                            "https://w3id.org/security/suites/ed25519-2020/v1",
                            {
                                "name": "https://schema.org/name",
                                "description": "https://schema.org/description",
                                "image": "https://schema.org/image"
                            },
                            "https://w3id.org/vc-revocation-list-2020/v1"
                        ],
                        "type": "Ed25519Signature2020",
                        "created": "2023-03-02T18:00:40Z",
                        "verificationMethod": "did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt",
                        "proofPurpose": "assertionMethod",
                        "proofValue": "z5psp5E44P3ASSk9y7nhg9x24ny5BKBmPYeEHRMdm3rcnyAM393YFeVY4fmy4xfqbT5khfAqMrGZUzAjHCYb4XigH"
                    },
                    "verified": true,
                    "verificationMethod": {
                        "@context": [
                            "https://www.w3.org/ns/did/v1",
                            "https://w3id.org/security/suites/ed25519-2020/v1",
                            "https://w3id.org/security/suites/x25519-2020/v1",
                            "https://w3id.org/security/suites/ed25519-2018/v1"
                        ],
                        "id": "did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt",
                        "type": "Ed25519VerificationKey2020",
                        "controller": "did:web:cbpvsvip-vc.gs1us.org",
                        "publicKeyMultibase": "z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt"
                    },
                    "purposeResult": {
                        "valid": true
                    }
                }
            ],
            "statusResult": {
                "verified": true,
                "Revocation": {
                    "verified": false,
                    "messages": [
                        {
                            "code": "123",
                            "rule": "test rule",
                            "isValid": false
                        }
                    ]
                },
                "gs1CredentialCheck": {
                    "verified": true,
                    "messages": []
                }
            },
            "credentialId": "http://did-vc.gs1us.org/vc/licence/08600057694"
        }
    ]
};

const vcResultFail_ToMap = {
    "verified": false,
    "results": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1"
        ],
        "type": [
          "VerifiablePresentation"
        ],
        "verifiableCredential": [
          {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://ref.gs1.org/gs1/vc/licence-context",
              "https://w3id.org/security/suites/ed25519-2020/v1",
              {
                "name": "https://schema.org/name",
                "description": "https://schema.org/description",
                "image": "https://schema.org/image"
              },
              "https://w3id.org/vc-revocation-list-2020/v1"
            ],
            "issuer": "did:web:cbpvsvip-vc.gs1us.org",
            "name": "GS1 Company Prefix Licence",
            "issuanceDate": "2021-05-11T10:50:36.701Z",
            "id": "http://did-vc.gs1us.org/vc/licence/08600057694",
            "type": [
              "VerifiableCredential",
              "GS1CompanyPrefixLicenceCredential"
            ],
            "credentialSubject": {
              "id": "did:key:z6MkoANbT3Pmg2MBEd9JHrK4wY8JMgzgpjXRdMumva15H2Yx/1",
              "organizationName": {
                "value": "Healthy Tots"
              },
              "extendsCredential": "https://did-vc.gs1.org/vc/licence/gs1_prefix/08",
              "licenceValue": "08600057694",
              "alternativeLicenceValue": "8600057694",
              "testField": false
            },
            "credentialStatus": {
              "id": "https://cbpvsvip-vc.dev.gs1us.org/status/2c0a1f02-d545-481b-902a-1e919cd706e2/1",
              "type": "RevocationList2020Status",
              "revocationListIndex": 1,
              "revocationListCredential": "https://cbpvsvip-vc.dev.gs1us.org/status/2c0a1f02-d545-481b-902a-1e919cd706e2/"
            },
            "proof": {
              "type": "Ed25519Signature2020",
              "created": "2023-03-02T18:00:40Z",
              "verificationMethod": "did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt",
              "proofPurpose": "assertionMethod",
              "proofValue": "fail_z5psp5E44P3ASSk9y7nhg9x24ny5BKBmPYeEHRMdm3rcnyAM393YFeVY4fmy4xfqbT5khfAqMrGZUzAjHCYb4XigH"
            }
          }
        ],
        "id": "http://did-vc.gs1us.org/vc/licence/08600057694"
      }
    ],
    "credentialResults": [
      {
        "verified": false,
        "results": [
          {
            "proof": {
              "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://ref.gs1.org/gs1/vc/licence-context",
                "https://w3id.org/security/suites/ed25519-2020/v1",
                {
                  "name": "https://schema.org/name",
                  "description": "https://schema.org/description",
                  "image": "https://schema.org/image"
                },
                "https://w3id.org/vc-revocation-list-2020/v1"
              ],
              "type": "Ed25519Signature2020",
              "created": "2023-03-02T18:00:40Z",
              "verificationMethod": "did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt",
              "proofPurpose": "assertionMethod",
              "proofValue": "fail_z5psp5E44P3ASSk9y7nhg9x24ny5BKBmPYeEHRMdm3rcnyAM393YFeVY4fmy4xfqbT5khfAqMrGZUzAjHCYb4XigH"
            },
            "verified": false,
            "error": {
              "name": "jsonld.ValidationError",
              "details": {
                "event": {
                  "type": [
                    "JsonLdEvent"
                  ],
                  "code": "invalid property",
                  "level": "warning",
                  "message": "Dropping property that did not expand into an absolute IRI or keyword.",
                  "details": {
                    "property": "testField",
                    "expandedProperty": "testField"
                  }
                }
              },
              "message": "Safe mode validation error.",
              "stack": "jsonld.ValidationError: Safe mode "
            }
          }
        ],
        "error": {
          "name": "VerificationError",
          "errors": [
            {
              "name": "jsonld.ValidationError",
              "details": {
                "event": {
                  "type": [
                    "JsonLdEvent"
                  ],
                  "code": "invalid property",
                  "level": "warning",
                  "message": "Dropping property that did not expand into an absolute IRI or keyword.",
                  "details": {
                    "property": "testField",
                    "expandedProperty": "testField"
                  }
                }
              },
              "message": "Safe mode validation error.",
              "stack": "jsonld.ValidationError:"
            }
          ]
        },
        "credentialId": "http://did-vc.gs1us.org/vc/licence/08600057694"
      }
    ]
  };

export async function testMappingCredential_null(): Promise<verificationResult> {
    const resultVC = await createVerificationResult(null);
    return { verified: !resultVC.verified,  result: resultVC };
}

export async function testMappingCredential_undefined(): Promise<verificationResult> {
    const resultVC = await createVerificationResult(undefined);
    return { verified: !resultVC.verified,  result: resultVC };
}

export async function testMappingCredential_Verified(): Promise<verificationResult> {
    const resultVC = await createVerificationResult({verified: true});
    return { verified: resultVC.verified,  result: resultVC };
}

export async function testMappingCredential_notVerified(): Promise<verificationResult> {
    const resultVC = await createVerificationResult({verified: false});
    return { verified: !resultVC.verified,  result: resultVC };
}

export async function testMappingCredential_passResult(): Promise<verificationResult> {
  const gs1CredentialCheckResult: gs1RulesResultContainer =  { verified: false, result: [] };
  const resultVC = await createVerificationResult(vcResultPass_ToMap, gs1CredentialCheckResult);

  return { verified: resultVC.verified,  result: resultVC };
}
export async function testMappingCredential_failResult(): Promise<verificationResult> {
  const gs1CredentialCheckResult: gs1RulesResultContainer =  { verified: false, result: [] };
  gs1CredentialCheckResult.result.push({ credentialId: "Test_CredentialId",
      credentialName: "Test_CredentialName", 
      verified: false, 
      errors: [{ code: "123", rule: "Test Rule", isValid: false}] });

  const resultVC = await createVerificationResult(vcResultFail_ToMap, gs1CredentialCheckResult);
  return { verified: !resultVC.verified,  result: resultVC };

}

