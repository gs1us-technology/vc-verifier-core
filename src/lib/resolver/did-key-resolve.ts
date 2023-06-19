import { driver } from '@digitalbazaar/did-method-key';
import {
    Ed25519VerificationKey2018
  } from '@digitalbazaar/ed25519-verification-key-2018';
import { DIDResolutionResult, DIDResolver, ParsedDID } from 'did-resolver';

// Setup DID:Key Resolver to be registered with the DID Resolver
  export function getResolver(): Record<string, DIDResolver> {
    async function resolve(did: string, parsed: ParsedDID): Promise<DIDResolutionResult> {

        const keyResult = await didKeyResolve(did);
  
        return {
            '@context': keyResult.contextUrl,
            didResolutionMetadata: { contentType: 'application/did+json' },
            didDocument: keyResult.document,
            didDocumentMetadata: {}
        };
    }

    return { key: resolve }
}

// Resolve DID:Key URL and return DID Document for requested URL
export async function didKeyResolve(url: string) : Promise<any> {  

    let didDocument = null;

    // To handle the DID:Keys from the traceability test suite, the resolver assumes they are Ed25519VerificationKey2018 based.
    const didKeyDriver = driver({
        verificationSuite: Ed25519VerificationKey2018
      });

    // this fetches a specific a key from a did doc by fingerPrint
    if(url.startsWith('did:key') && url.includes('#')) {
        const did = url.split('#')[0];
        const didKey = await didKeyDriver.get({did});

        let doc = null;
        for(const prop in didKey) {
            const property = didKey[prop];
            if(Array.isArray(property)) {
                [doc] = property.filter(p => p.id === url);
            }
            if(property.id === url) {
                doc = didKey[prop];
            }
            if(doc) {
                break;
        }
        }

        // Add the correct context for the DID Key security suite 
        if (doc.type === "Ed25519VerificationKey2018") {
            doc['@context'] = "https://w3id.org/security/suites/ed25519-2018/v1";
        } else {
            doc['@context'] = 'https://w3id.org/security/v2';
        }

        return {
                contextUrl: null,
                documentUrl: url,
                document: doc
            };
    }

    // this fetches the entire did document
    if(url.startsWith('did:key')) {
        const did = url.split('#')[0];
        const doc = await didKeyDriver.get({did});

        return {
            contextUrl: null,
            documentUrl: url,
            document: doc
        }
    }

    return didDocument;

};