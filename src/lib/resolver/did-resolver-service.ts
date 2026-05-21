import { Resolver } from 'did-resolver'
import * as web from 'web-did-resolver'

// Function for getting DID Resolvers:
// Currently Support DID:Web and DID:Key
export function getResolver() {
    return new Resolver(
        {
            ...web.getResolver(),
        },
        {
            cache: true,
        }
    )
}
