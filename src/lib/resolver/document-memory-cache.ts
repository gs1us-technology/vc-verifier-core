
// Axios Library used to get external files via HTTPS
import axios from 'axios';
import { getResolver } from './did-resolver-service.js';

// Override for local error - unable to get local issuer certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

// Memory Cache to store resolve external DID Documents and verifiable credentials
const documentMemoryCache = new Map();

// Status of when to show/hide cache warning messages
const showCacheWarning = false;

// Flag to Turn On/Off Logging of Fetched Documents 
const LOG_FETCH = false;

function showCacheWarningMessage(message: string) {
    if (showCacheWarning) {
        console.warn(message);
    }
}

// Get External Document for requested Url
// if Document cannot be found an error will be throw that the caller needs to handle
export async function getExternalDocument(url: string): Promise<unknown> {

    if (!!!url) {
        throw new Error('Document URL is required.');
    }

    let document = documentMemoryCache.get(url);

    if (!document) {

        showCacheWarningMessage(`Document from ${url} not in cache`);

        // Resolve DID Web Document
        if (url.startsWith('did:web:')) {
            document = (await getResolver().resolve(url)).didDocument;
        } else {
            // Get External Document for requested Url  
            document = await fetchDocument(url, (error: fetchDocumentError) => {
                if (LOG_FETCH) {
                    // Log any error to console and return unable to load error to caller
                    console.log(error.exception);
                }
     
                throw new Error(`Document loader unable to load URL "${url}".`);
            });
        }

        // Add document to memory cache 
        documentMemoryCache.set(url, document);
        showCacheWarningMessage(`Document from ${url} added to cache`);
    } else {
        showCacheWarningMessage(`Document from ${url} in cache`);
    }

    return document;
}


// Fetch Error Parameter
export type fetchDocumentError = {
    message: string;
    exception: any;
}

// Function Defination for handling fetch document errors
export interface fetchDocumentErrorCallback {
    (fecthError: fetchDocumentError): void;
};

// Fetch External Document for requested Url
// If request fails an error will be returned in callback
export async function fetchDocument(url: string, errorCallback: fetchDocumentErrorCallback): Promise<unknown> {

    if (!!!url) {
        throw new Error('Document URL is required.');
    }

    if (!!!errorCallback) {
        throw new Error('errorCallback function is required.');
    }

    if (!url.startsWith('did:') && !url.startsWith('https:')) {
        throw new Error("Only 'did:' and 'https:' URIs are supported.");
    }

    try {
        const response = await axios.get(url);
        if (LOG_FETCH) {
            console.warn(`Fetched and cached document from ${url}. Be sure to validate the document orgin and integrity!`);
        }

        return  response.data;
    } catch(e: any) {
        errorCallback({message: e.message, exception: e});
    }

    return undefined;
}



