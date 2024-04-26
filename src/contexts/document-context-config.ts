// Common VC Context Documents 
import { jsonld } from './common/jsonld.js';
import { ed255192018, ed25519_signature_2018_v1 } from './common/ed25519-2018.js';
import { ed255192020, ed255192020_key_agreement_v1 } from './common/ed25519-2020.js';
import { vcRevocationList2020 } from './common/vc-revocation-list-2020.js';
import { nsDidv1 } from './common/ns-did-v1.js';

// GS1 Specific Context Documents 
import { gs1LicenceContext } from './gs1/json-ld/gs1_licence_context.js';
import { gs1DeclarationContext } from './gs1/json-ld/gs1_declaration_context.js';
import { gs1OrganizationContext } from './gs1/json-ld/gs1_organization-context.js';
import { gs1TradeItemContext } from './gs1/json-ld/gs1_trade_item_context.js';
import { gs1ProductContext } from './gs1/json-ld/gs1_product_context.js';

// Traceability Specific Context Documents
import { traceability_v1 } from './traceability/traceability-v1.js'
import { gs1CbpDid } from './gs1/did/didCBP.js';

// Document Context Configuration for Local Cache
// Developer Notes: 
// To add a new document to local cache, create a JS file and export the JSON object. 
// Then add it to the documentContextConfig array below. Using it's URL as the key
export const documentContextConfig = {
    documents: [{
        url: "https://www.w3.org/ns/odrl.jsonld",
        document: jsonld
    },
    {
        url: "https://w3id.org/security/suites/ed25519-2020/v1",
        document: ed255192020
    },
    {
        url: "https://w3id.org/security/v2",
        document: ed255192018
    },
    {
        url: "https://w3id.org/vc-revocation-list-2020/v1",
        document: vcRevocationList2020
    },
    {
        url: "https://www.w3.org/ns/did/v1",
        document: nsDidv1
    },
    {
        url: "https://w3id.org/security/suites/x25519-2020/v1",
        document: ed255192020_key_agreement_v1
    },
    {
        url: "https://w3id.org/security/suites/ed25519-2018/v1",
        document: ed25519_signature_2018_v1
    },
    {
        url: "https://w3id.org/traceability/v1",
        document: traceability_v1
    },
    {
        url: "https://ref.gs1.org/gs1/vc/license-context",
        document: gs1LicenceContext
    },
    {
        url: "https://ref.gs1.org/gs1/vc/declaration-context",
        document: gs1DeclarationContext
    },
    {
        url: "https://ref.gs1.org/gs1/vc/organization-context",
        document: gs1OrganizationContext
    },
    {
        url: "https://ref.gs1.org/gs1/vc/product-context",
        document: gs1ProductContext
    },
    {
        url: "https://ref.gs1.org/gs1/vc/trade-item-context",
        document: gs1TradeItemContext
    },
    {
        url: "did:web:cbpvsvip-vc.gs1us.org#z6Mkig1nTEAxna86Pjb71SZdbX3jEdKRqG1krDdKDatiHVxt",
        document: gs1CbpDid
    },
    {
        url: "did:web:cbpvsvip-vc.gs1us.org",
        document: gs1CbpDid
    }]
}