export const gs1CbpDidDev =  {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/ed25519-2020/v1",
      "https://w3id.org/security/suites/x25519-2020/v1"
    ],
    "id": "did:web:cbpvsvip-vc.dev.gs1us.org",
    "verificationMethod": [
      {
        "id": "did:web:cbpvsvip-vc.dev.gs1us.org#z6Mkv1t6Ew7YNzCQKU9WMANe4KcwZZda8aB4iKC5swG8NqCD",
        "type": "Ed25519VerificationKey2020",
        "controller": "did:web:cbpvsvip-vc.dev.gs1us.org",
        "publicKeyMultibase": "z6Mkv1t6Ew7YNzCQKU9WMANe4KcwZZda8aB4iKC5swG8NqCD"
      }
    ],
    "authentication": [
      "did:web:cbpvsvip-vc.dev.gs1us.org#z6Mkv1t6Ew7YNzCQKU9WMANe4KcwZZda8aB4iKC5swG8NqCD"
    ],
    "assertionMethod": [
      "did:web:cbpvsvip-vc.dev.gs1us.org#z6Mkv1t6Ew7YNzCQKU9WMANe4KcwZZda8aB4iKC5swG8NqCD"
    ],
    "capabilityDelegation": [
      "did:web:cbpvsvip-vc.dev.gs1us.org#z6Mkv1t6Ew7YNzCQKU9WMANe4KcwZZda8aB4iKC5swG8NqCD"
    ],
    "capabilityInvocation": [
      "did:web:cbpvsvip-vc.dev.gs1us.org#z6Mkv1t6Ew7YNzCQKU9WMANe4KcwZZda8aB4iKC5swG8NqCD"
    ],
    "keyAgreement": [
      {
        "id": "did:web:cbpvsvip-vc.dev.gs1us.org#z6LSbseM7i8xpziBbxTmb7vQmVFNdnZgvaKRjqawjqtBhVN4",
        "type": "X25519KeyAgreementKey2020",
        "controller": "did:web:cbpvsvip-vc.dev.gs1us.org",
        "publicKeyMultibase": "z6LSbseM7i8xpziBbxTmb7vQmVFNdnZgvaKRjqawjqtBhVN4"
      }
    ]
  }


  // Production GS1 US DID Document updated to support multiple security suites
  // Not Once this is fully tested the Updated DID Document needs to be deployed to the static website
  export const gs1CbpDid = {
    '@context': [
      'https://www.w3.org/ns/did/v1',
      'https://w3id.org/security/suites/ed25519-2020/v1',
      'https://w3id.org/security/suites/x25519-2020/v1',
      'https://w3id.org/security/suites/ed25519-2018/v1'
    ],
    id: 'did:web:cbpvsvip-vc.gs1us.org',
    verificationMethod: [
      {
        id: 'did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt',
        type: 'Ed25519VerificationKey2020',
        controller: 'did:web:cbpvsvip-vc.gs1us.org',
        publicKeyMultibase: 'z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt'
      },
      {
        id: 'did:web:cbpvsvip-vc.gs1us.org#5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc',
        type: 'Ed25519VerificationKey2018',
        controller: 'did:web:cbpvsvip-vc.gs1us.org',
        publicKeyBase58: '5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc'
      }
    ],
    authentication: [
      'did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt',
      'did:web:cbpvsvip-vc.gs1us.org#5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc'
    ],
    assertionMethod: [
      'did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt',
      'did:web:cbpvsvip-vc.gs1us.org#5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc'
    ],
    capabilityDelegation: [
      'did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt',
      'did:web:cbpvsvip-vc.gs1us.org#5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc'
    ],
    capabilityInvocation: [
      'did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt',
      'did:web:cbpvsvip-vc.gs1us.org#5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc'
    ],
    keyAgreement: [
      {
        id: 'did:web:cbpvsvip-vc.gs1us.org#z6LSeSb6DC38Qcwi5H3Rd24PfRL7rAe7wgUJ9feaickQuWx6',
        type: 'X25519KeyAgreementKey2020',
        controller: 'did:web:cbpvsvip-vc.gs1us.org',
        publicKeyMultibase: 'z6LSeSb6DC38Qcwi5H3Rd24PfRL7rAe7wgUJ9feaickQuWx6'
      }
    ],
    publicKey: [
      {
        '@context': 'https://w3id.org/security/v2',
        id: 'did:web:cbpvsvip-vc.gs1us.org#5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc',
        type: 'Ed25519VerificationKey2018',
        publicKeyBase58: '5yYxa2LAQCkNA8BDEkhtgDEoPNeJhHUmsQBvzATvRZrc'
      },
      {
        '@context': 'https://w3id.org/security/v2',
        id: 'did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt',
        type: 'Ed25519VerificationKey2020',
        controller: 'did:web:cbpvsvip-vc.gs1us.org',
        publicKeyMultibase: 'z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt'
      }
    ],
    service: [
      {
        "id": "did:web:cbpvsvip-vc.gs1us.org#traceability-api",
        "type": [
          "TraceabilityAPI"
        ],
        "serviceEndpoint": "https://vc.cbpsvip.gs1us.org/cbpsvip"
      }
    ]
  }

  export const gs1GlobalDid =  {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/ed25519-2020/v1",
      "https://w3id.org/security/suites/x25519-2020/v1"
    ],
    "id": "did:web:id.gs1.org",
    "verificationMethod": [
      {
        "id": "did:web:id.gs1.org#z6MkmyW9bMwkNv2imXTkdU36HEBKAgdk3zDcKCarXJPHgNfM",
        "type": "Ed25519VerificationKey2020",
        "controller": "did:web:id.gs1.org",
        "publicKeyMultibase": "z6MkmyW9bMwkNv2imXTkdU36HEBKAgdk3zDcKCarXJPHgNfM"
      },
      {
        "id": "did:web:id.gs1.org#z6MkkzYByKSsaWusRbYNZGAMvdd5utsPqsGKvrc7T9jyvUrN",
        "type": "Ed25519VerificationKey2020",
        "controller": "did:web:id.gs1.org",
        "publicKeyMultibase": "z6MkkzYByKSsaWusRbYNZGAMvdd5utsPqsGKvrc7T9jyvUrN"
      }
    ],
    "authentication": [
      "did:web:id.gs1.org#z6MkmyW9bMwkNv2imXTkdU36HEBKAgdk3zDcKCarXJPHgNfM",
      "did:web:id.gs1.org#z6MkkzYByKSsaWusRbYNZGAMvdd5utsPqsGKvrc7T9jyvUrN"
    ],
    "assertionMethod": [
      "did:web:id.gs1.org#z6MkmyW9bMwkNv2imXTkdU36HEBKAgdk3zDcKCarXJPHgNfM",
      "did:web:id.gs1.org#z6MkkzYByKSsaWusRbYNZGAMvdd5utsPqsGKvrc7T9jyvUrN"
    ],
    "capabilityDelegation": [
      "did:web:id.gs1.org#z6MkmyW9bMwkNv2imXTkdU36HEBKAgdk3zDcKCarXJPHgNfM",
      "did:web:id.gs1.org#z6MkkzYByKSsaWusRbYNZGAMvdd5utsPqsGKvrc7T9jyvUrN"
    ],
    "capabilityInvocation": [
      "did:web:id.gs1.org#z6MkmyW9bMwkNv2imXTkdU36HEBKAgdk3zDcKCarXJPHgNfM",
      "did:web:id.gs1.org#z6MkkzYByKSsaWusRbYNZGAMvdd5utsPqsGKvrc7T9jyvUrN"
    ],
    "keyAgreement": [
      {
        "id": "did:web:id.gs1.org#z6LScaiPPGzxoU6XwaniuHwo8zqUKgTxVBw3CBrvnbEdC3kL",
        "type": "X25519KeyAgreementKey2020",
        "controller": "did:web:id.gs1.org",
        "publicKeyMultibase": "z6LScaiPPGzxoU6XwaniuHwo8zqUKgTxVBw3CBrvnbEdC3kL"
      },
      {
        "id": "did:web:id.gs1.org#z6LSd2GFpfyMXPWit6TM4XvD4ZLwFxTttg9oTnn2p6Fba7HY",
        "type": "X25519KeyAgreementKey2020",
        "controller": "did:web:id.gs1.org",
        "publicKeyMultibase": "z6LSd2GFpfyMXPWit6TM4XvD4ZLwFxTttg9oTnn2p6Fba7HY"
      }
    ]
  }