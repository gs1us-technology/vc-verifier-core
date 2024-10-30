import { Resolver } from "did-resolver";
import * as web from 'web-did-resolver';
import * as key from './did-key-resolve.js';

// Function for getting DID Resolvers:
// Currently Support DID:Web and DID:Key
export function getResolver() {
    return new Resolver({
        ...key.getResolver(),
        ...web.getResolver()
    },
    {
        cache: true
    })
}
