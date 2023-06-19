import {  Dir, opendirSync, readFileSync } from "fs";

// @ts-ignore
import { VerifiableCredential, VerifiablePresentation} from '@gs1us/vc-verifier-rules';

export type localCacheMap = {
    localCache : Map<string, any>;
}

const localCacheMap = new Map<string, any>();

async function loadFilesFromDirectory(dirPath: string ) : Promise<void> {

    const dir = opendirSync(dirPath);
    for await (const entry of dir) {
        const fullPath = dir.path + "/" + entry.name;
        if (entry.isDirectory()) {
            await loadFilesFromDirectory(fullPath);
        } else {
            const data = readFileSync(fullPath, { encoding:'utf8', flag:'r' });
            localCacheMap.set(entry.name, JSON.parse(data));
        }
    }
}

// Get Test Credential from local cache folder (Located at public/test-data
// Test is Used for Testing the Verification library with different credentials types and scenarios 
export async function readLocalJsonTestData() : Promise<localCacheMap> {
    await loadFilesFromDirectory("./public/test-data");
    return {localCache: localCacheMap };
}

// Load Test Credentials 
const localJsonCache: localCacheMap = await readLocalJsonTestData();

// Get File from Local Cache
const getFileFromLocalDataCache = function(testData: string) : VerifiableCredential | VerifiablePresentation{
    try {
        const value = testData.endsWith(".json")? testData : `${testData}.json`;
        return  localJsonCache.localCache.get(value);
    } catch(e) {
        throw new Error(`Test Credential ${testData} not found in local cache`);
    }
} 

// Get Verifiable Credential from local cache folder (Located at public/test-data)
export const getTestCredential = function(testData: string) : VerifiableCredential {
    return getFileFromLocalDataCache(testData);
}

// Get Verifiable Presentation from local cache folder (Located at public/test-data)
export const getTestPresentation = function(testData: string) : VerifiablePresentation {
    return getFileFromLocalDataCache(testData);
}