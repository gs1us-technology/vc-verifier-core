import {  opendirSync, readFileSync } from "fs";
import { VerifiableCredential, VerifiablePresentation} from '@gs1us/vc-verifier-rules';

// Local In Memory Cache for loading documents from the public folder
const localCacheMap = new Map<string, string>();

// Recursively load Files in Public Directory into Local Cache
async function loadFilesFromDirectory(dirPath: string ) : Promise<void> {

    const dir = opendirSync(dirPath);
    for await (const entry of dir) {
        const fullPath = dir.path + "/" + entry.name;
        if (entry.isDirectory()) {
            await loadFilesFromDirectory(fullPath);
        } else {
            const data = readFileSync(fullPath, { encoding:'utf8', flag:'r' });
            localCacheMap.set(entry.name, data);
        }
    }
}

// Get Test Credential from local cache folder (Located at public/test-data
// Test is Used for Testing the Verification library with different credentials types and scenarios 
const lOCAL_CACHE_PATH = "./public/test-data";
await loadFilesFromDirectory(lOCAL_CACHE_PATH);

export const getBufferFileFromLocalDataCache = function(testData: string, format: string = 'json') : Buffer {
    try {
        const value = testData.endsWith(".json")? testData : `${testData}.${format}`;
        const cacheValue = localCacheMap.get(value);
        return cacheValue ? Buffer.from(cacheValue, 'utf-8') : Buffer.from('');;
    } catch(e) {
        throw new Error(`Test Credential ${testData} not found in local cache`);
    }
} 

// Get File from Local Cache
export const addFileFromLocalDataCache = function(url: string, data: string) : void {
    localCacheMap.set(url, data);
} 

// Get File from Local Cache
const getFileFromLocalDataCache = function(testData: string) : VerifiableCredential | VerifiablePresentation {
    try {
        const value = testData.endsWith(".json")? testData : `${testData}.json`;
        const cacheValue = localCacheMap.get(value);
        return cacheValue ? JSON.parse(cacheValue) : {};
    } catch(e) {
        throw new Error(`Test Credential ${testData} not found in local cache`);
    }
} 

// Get JWT (JOSE) File from Local Cache
const getFileFromLocalDataCacheJwt = function(testData: string) : string {
    try {
        const value = testData.endsWith(".jwt")? testData : `${testData}.jwt`;
        const cacheValue = localCacheMap.get(value);
        return cacheValue ? cacheValue : '';
    } catch(e) {
        throw new Error(`Test Credential ${testData} not found in local cache`);
    }
} 

// Get Verifiable Credential from local cache folder (Located at public/test-data)
// Developer Notes: This is a Helper Method to get a individual Verifiable Credential. 
// This should only be called when you know you want a Verifiable Credential not a Verifiable Presentation
export const getTestCredential = function(testData: string) : VerifiableCredential {
    return getFileFromLocalDataCache(testData) as VerifiableCredential;
}

// Get Verifiable Presentation from local cache folder (Located at public/test-data)
// Developer Notes: This is a Helper Method to get a Verifiable Presentation. 
// This should only be called when you know you want a Verifiable Presentation not a Verifiable Credential
export const getTestPresentation = function(testData: string) : VerifiablePresentation {
    return getFileFromLocalDataCache(testData) as VerifiablePresentation;
}

// Get Verifiable Credential from local cache folder (Located at public/test-data)
export const getJwtCredentiaByUrl = function(url: string) : string {
    const cacheValue = localCacheMap.get(url);
    return cacheValue ? cacheValue : '';
}

// Get Verifiable Credential from local cache folder (Located at public/test-data)
export const getJwtCredential = function(testData: string) : string {
    return getFileFromLocalDataCacheJwt(testData);
}

// Get Verifiable Credential from local cache folder (Located at public/test-data)
export const getDocumentFromCache = function(testData: string) : VerifiableCredential | VerifiablePresentation {
    const document = getFileFromLocalDataCache(testData);
    return document;
}
