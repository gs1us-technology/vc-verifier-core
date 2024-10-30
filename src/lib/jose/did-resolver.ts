import { getDocumentFromCache, getJwtCredential } from '../cache/local-cache.js';

const didDocument_Cache = new Map<string, Buffer>();

// Load Supported DID Document Cache
export function loadDIDCache() : void {
    const gs1us_DID = Buffer.from(JSON.stringify(getDocumentFromCache('gs1-cbpvsvip-did')));
    // didDocument_Cache.set('did:web:cbpvsvip-vc.gs1us.org:key-73', gs1us_DID);
    didDocument_Cache.set('did:web:cbpvsvip-vc.gs1us.org#Iyr0fwTvdlERk8EBXVuIs7682yn9djcBx6hGmzcaoas', gs1us_DID);

    const gs1global_DID = Buffer.from(JSON.stringify(getDocumentFromCache('gs1-global-did')));
    didDocument_Cache.set('did:web:id.gs1.org#fw_hRvwdtJ-LgJk5mSBcdXYfZigY0Ysvz1hOA--1thI', gs1global_DID);

    const healthyTots_DID = Buffer.from(JSON.stringify(getDocumentFromCache('healthy-tots-did')));
    didDocument_Cache.set('did:web:healthytots.net#Iyr0fwTvdlERk8EBXVuIs7682yn9djcBx6hGmzcaoas', healthyTots_DID);
}

// Resolver Public Key for DID Document
// Add Universal Resolver to Get DID WEB Documents that are not cached
// Determine Different Ways to Look up Key from DID Document
const publicKey_Cache = new Map<string, Buffer>();
export async function getPublicKeyFromDid(id: string | undefined) : Promise<Buffer> {

    if (id === undefined) {
        throw new Error('id cannot be undefined');
    }

    if (publicKey_Cache.size === 0) {
        loadDIDCache();
    }

    // Look up DID Public Key from Cache
    if (publicKey_Cache.has(id)) {
        const cacheBuffer = publicKey_Cache.get(id);
        if (cacheBuffer) {
            return cacheBuffer;
        }

        throw new Error('No Public Key Found for DID: ' + id);
    }

    // Get Public Key from Resolved DID Document
    try {
        const publicKey_DidDocument = didDocument_Cache.get(id);
        if (!publicKey_DidDocument) {
            throw new Error('No DID Document Found for DID: ' + id);
        }

        const prototype_DID = JSON.parse(publicKey_DidDocument.toString());

        const verificationMethod = prototype_DID.verificationMethod || prototype_DID.verificationMethod.length > 0 
            // Verification Method is unknown data structure
            // eslint-disable-next-line
            ? prototype_DID.verificationMethod.find((x: any) => x.id === id) : null;

        if (!verificationMethod) { 
            throw new Error('No Public Key Found for DID: ' + id);
        }

        const keyJson = JSON.stringify(verificationMethod.publicKeyJwk);
        const keyBuffer = Buffer.from(keyJson);

        // Add Public Key Buffer to Cache
        publicKey_Cache.set(id, keyBuffer);
        return keyBuffer;
    } catch (error) {

        if (error instanceof Error) {
            const keyJson = error.message
            const keyBuffer = Buffer.from(keyJson);
            return keyBuffer;
        }

        throw new Error('Unknown Error has occurred');
    }
}

// Get External Credential from URL
export async function resolveDocument(url: string) : Promise<Buffer> {

    // Load External Credential using JOSE Request
    const credentialUrl = new URL(url);

    if (!credentialUrl) {
      throw new Error('No Credential Found for ' + url);
    }
  
    const jwtPathname = credentialUrl.pathname.replace(/\//g, "-");
    const jwtName = jwtPathname.startsWith("-") ? jwtPathname.substring(1) : jwtPathname;
    const jwt_Prefix = getJwtCredential(jwtName);
    return Buffer.from(jwt_Prefix);
}

