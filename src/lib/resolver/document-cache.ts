'use strict';

import {
  contexts as credentialsContexts,
  constants as credentialConstants
} from 'credentials-context';

// Setup Standard Context Cache
const {CREDENTIALS_CONTEXT_V1_URL} = credentialConstants;

// Configuration for loading local context cache documents
import { documentContextConfig } from '../../contexts/document-context-config.js';

// Setup Local Document Context Cache
const LocalContextCache: any  = {};
const loadLocalCache = async () => {

  LocalContextCache['https://www.w3.org/2018/credentials/v1'] = credentialsContexts.get(CREDENTIALS_CONTEXT_V1_URL);

  documentContextConfig.documents.forEach((context) => { 
    LocalContextCache[context.url] = context.document;
  });

}

// Load Local Cache using document configuration
await loadLocalCache();

// Function to get document from local cache
export function getDocumentFromContextCache(url: string) {
  return  LocalContextCache[url];
}