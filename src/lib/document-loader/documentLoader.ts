import {getDocumentFromContextCache } from '../resolver/document-cache.js'
import { didWebResolve } from '../resolver/did-web-resolve.js'
import { didKeyResolve } from '../resolver/did-key-resolve.js'
import { getExternalDocument } from '../resolver/document-memory-cache.js';

// Document Loader (Callback): Will be called when ever a document (DID, JSON, VC) is requested
// Notes: About Caching Local Documents
//    Secure Context Loader
//    jsonld-signatures has a secure context loader which assesses local
//    copies of json-ld rather than download from across the internet.
//    These are written and placed in ../lib/contexts/ folder, and accessed
//    by the documentLoader below.
// Document Loader Flow: 
//  Will try to resolve DID: Web and DID: Key Documents
//  Will Check Local Cache for Document
//  If Document not in Local Cache, will try to get from External Source
export async function documentLoader(url: string) {
    
    //const context = contexts[url];
    if(url.startsWith('did:web:')) {
      return {
        contextUrl: null,
        documentUrl: url,
        document: await didWebResolve(url)
        };
    } else if (url.startsWith('did:key:')) {
      return await didKeyResolve(url);
    } else {
        const context = getDocumentFromContextCache(url);

        if(context !== undefined) {
          return {
                  contextUrl: null,
                  documentUrl: url,
                  document: context,
                  // This ensures the context is only loaded and processed once during the
                  // lifetime of this application since it will never change.
                  tag: 'static'
              };
      }

        // Get External Document for requested Url  
        const  externalDocument = await getExternalDocument(url);

        if(externalDocument !== undefined) {
          return {
                  contextUrl: null,
                  documentUrl: url,
                  document: externalDocument
              };
        } 

    }

    throw new Error(`Document loader unable to load URL "${url}".`);
};
