import { documentLoader } from '../resolver/documentLoader.js'
import { verifyCredential } from '../jose/verify-service.js'
import { jose_mime_type_vc, jwk } from '../jose/key-service.js'
import { resolveDocument } from '../jose/did-resolver.js'

import {
    checkGS1CredentialPresentationValidation,
    checkGS1CredentialWithoutPresentation,
    externalCredential,
    verifyExternalCredential,
    gs1RulesResult,
    gs1RulesResultContainer,
    VerifiableCredential,
    VerifiablePresentation,
    gs1ValidatorRequest,
} from '@gs1us/vc-verifier-rules'

import { getJsonSchema } from '../jose/json-schema-service.js'

// List of Supported Credential Types for GS1 Credential Validation
export type GS1CredentialValidationOptions = {
    credentialType: 'DataIntegrityProof' | 'JOSE'
}

// Validator Function For Processing and Validating GS1 Credentials using the GS1 Rules Library
export function gs1Validator(
    options: GS1CredentialValidationOptions = {
        credentialType: 'DataIntegrityProof',
    }
) {
    // Options Define How the GS1 Validator will handle different types of Credentials DIP vs JOSE
    const validationOptions = options

    // Callback function to resolve external credential
    // For Non JOSE Credential Types the Standard Document Loader will handle retrieving the external credential
    // For JOSE Credential Types the Resolver will be used to resolve the JWT Credential
    const getExternalCredential: externalCredential = async (
        url: string
    ): Promise<VerifiableCredential> => {
        if (validationOptions.credentialType === 'JOSE') {
            const signedCredential = await resolveDocument(url)
            const verifier_result = await verifyCredential(
                { type: jose_mime_type_vc, content: signedCredential },
                jwk
            )

            return verifier_result.result
        }

        const extendedVC = await documentLoader(url)
        return extendedVC.document
    }

    // Callback function to verify external credential to ensure the VC passes proof, revocation and GS1 Rules
    // Processing Logic:
    // Embedded (Data Integrity Proof) Credentials required Proof Verification Before Validating GS1 Rules
    // Enveloping (JOSE, COSE, SW_JWT) Require Verification when resolving the external credential
    const checkExternalCredential: verifyExternalCredential = async (
        credential: VerifiableCredential
    ): Promise<gs1RulesResult> => {
        // Errors Return have an expcliit any type
        // eslint-disable-next-line
        let validationErrors: any[] = []

        // Check GS1 Rules for external credential
        const validator = gs1Validator(validationOptions)
        const gs1RulesResult = await validator.checkGS1Credential(credential)

        // Merge Verification Errors with GS1 Rules Errors
        if (validationErrors && validationErrors.length > 0) {
            gs1RulesResult.errors.push(...validationErrors)
            gs1RulesResult.verified = false
        }

        return gs1RulesResult
    }

    // Check if the Verifiable Credential is a GS1 Credential and if so check the GS1 Credential Rules
    async function checkGS1Credential(
        verifiableCredential: VerifiableCredential
    ): Promise<gs1RulesResult> {
        const validatorRequest: gs1ValidatorRequest = {
            fullJsonSchemaValidationOn: true,
            gs1DocumentResolver: {
                externalCredentialLoader: getExternalCredential,
                externalCredentialVerification: checkExternalCredential,
                externalJsonSchemaLoader: jsonSchemaLoader,
            },
        }

        return await checkGS1CredentialWithoutPresentation(
            validatorRequest,
            verifiableCredential
        )
    }

    // Check if the Verifiable Presentation for any GS1 Credential and if so check the GS1 Credential Rules
    async function verifyGS1Credentials(
        verifiablePresentation: VerifiablePresentation
    ): Promise<gs1RulesResultContainer> {
        const validatorRequest: gs1ValidatorRequest = {
            fullJsonSchemaValidationOn: true,
            gs1DocumentResolver: {
                externalCredentialLoader: getExternalCredential,
                externalCredentialVerification: checkExternalCredential,
                externalJsonSchemaLoader: jsonSchemaLoader,
            },
        }

        return await checkGS1CredentialPresentationValidation(
            validatorRequest,
            verifiablePresentation
        )
    }

    return {
        checkGS1Credential: checkGS1Credential,
        verifyGS1Credentials: verifyGS1Credentials,
    }
}

// Resolver Callback Function to Load JSON Schema for GS1 Credential Validation
export function jsonSchemaLoader(schemaId: string): Buffer {
    const jsonSchema = getJsonSchema(schemaId)

    if (jsonSchema) {
        return jsonSchema
    } else {
        return Buffer.from('')
    }
}
