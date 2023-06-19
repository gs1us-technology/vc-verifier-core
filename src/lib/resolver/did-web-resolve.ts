import pkg from 'jsonld';
const { createNodeMap, compact } = pkg;
import {getDocumentFromContextCache } from './document-cache.js'
import { documentLoader } from '../document-loader/documentLoader.js';
import { getResolver } from './did-resolver-service.js';
import { getExternalDocument } from './document-memory-cache.js';

// Resolve did:web document 
export async function didWebResolve(url: string) {  
  
   // Get Document from Local Cache
    let didDoc = null;
    didDoc = getDocumentFromContextCache(url);

    // Resolve DID Web Document when not in local cache
    if(didDoc === undefined) { 
      didDoc = await getExternalDocument(url);
    }
  
    // If document is still undefined then throw error to document loader
    if (didDoc === undefined) {
        throw new Error(`Document loader unable to load URL "${url}".`);
    }

    // If document contains a hash fragment then return subgraph
    const [_, hashFragment] = url.split('#');
    if(!hashFragment) {
      return didDoc;
    }
  
    try {

      // Pass Document Loader to handle loading standard documents from internal cache
      const map = await createNodeMap(didDoc,  {
        documentLoader: documentLoader
      });

      const subGraph = map[url];
      if(!subGraph) {
        // key with identifier not found in the RDF Graph
        const error = new Error(
          `Failed to get subgraph within a DID Document, uri: "${url}".`,
        );
        error.name = 'NotFoundError';
        throw error;
      }
    
      // Compact the subgraph to remove any unused context
      const context = didDoc['@context'];
      const keyDoc = await compact(subGraph, context);
      return keyDoc;

    } catch (error) {
        throw error;  
    }
  
  }