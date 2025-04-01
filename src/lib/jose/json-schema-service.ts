import * as transmute from '@transmute/verifiable-credentials';
import { getBufferFileFromLocalDataCache } from '../cache/local-cache.js';

export const getJsonSchemaContents = (id: string, jsonSchemaId: string, useYaml: boolean = false) : void  => {
    const jsonSchemaBuffer = getBufferFileFromLocalDataCache(jsonSchemaId, useYaml ? 'yaml' : 'json');
    jsonSchemaCache.set(id, transmute.text.encoder.encode(jsonSchemaBuffer));
}

 const jsonSchemaCache = new Map<string, Buffer>();
export const loadJsonSchemaService = () : void  => {
    getJsonSchemaContents('https://id.gs1.org/vc/schema/v1/prefix', 'gs1-prefix-schema');
    getJsonSchemaContents('https://id.gs1.org/vc/schema/v1/companyprefix', 'gs1-company-prefix-schema');
    getJsonSchemaContents('https://id.gs1.org/vc/schema/v1/key', 'gs1-key-schema');
    getJsonSchemaContents('https://id.gs1.org/vc/schema/v1/organizationdata', 'gs1-organization-data-schema');
    getJsonSchemaContents('https://id.gs1.org/vc/schema/v1/productdata', 'gs1-product-data-schema');
    getJsonSchemaContents('https://id.gs1.org/vc/schema/v1/identificationkey', 'gs1-identity-key-schema');
    getJsonSchemaContents('https://transmute-industries.github.io/verifiable-credential-profile-template/schemas/ExampleAlumniCredential.yaml', 'sample-schema.json');
}
loadJsonSchemaService();

export const getJsonSchema = (id: string | undefined) : Buffer  | undefined => {

    if (id === undefined) { return undefined; }

    if (jsonSchemaCache.has(id)) {
        return jsonSchemaCache.get(id);
    } 

    return undefined;
}