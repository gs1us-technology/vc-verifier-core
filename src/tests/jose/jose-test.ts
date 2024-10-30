import { getJwtCredential } from '../../lib/cache/local-cache.js';
import { verifyEnvelopeCredential, verifyEnvelopePresentation } from '../../lib/jose/verify-service.js';
import { testHarnessParameters, testResult, testHarness } from '../test-types.js';

// Test Harness Method for Verifying JWT (JOSE) Individual Credential
// When isError is turned on the expected verification should fail based on the data
// Types of Failures Include:
// 1. Revoked Credential
// 2. JSON Schema Validation Failure
// 3. Invalid Credential
// 4. Invalid Signature
// 5. Invalid Issuer
// 6. GS1 Validation Credential Chain Error
// 7. GS1 Validation Attribute Error
export  const testVerify_jose_credential = async (parameters?: testHarnessParameters) : Promise<testResult>  => {

  if (!parameters) {
    throw new Error("Missing Parameters: Must pass testing parameters to testVerify_jose_presentation.");
  }

  const jwt = getJwtCredential(parameters.credentialName);
  const vcResult = await verifyEnvelopeCredential(jwt)

  return { verified: vcResult.verified,  result: vcResult };
 }


 export  const testVerify_jose_credential_Error = async (parameters?: testHarnessParameters) : Promise<testResult>  => {
  
  if (!parameters) {
    throw new Error("Missing Parameters: Must pass testing parameters to testVerify_jose_presentation.");
  }

  const jwt = getJwtCredential(parameters.credentialName);
  const vcResult = await verifyEnvelopeCredential(jwt);

  const checkErrorStatus = vcResult.verifications?.find(verification => verification.status === "bad" && verification.title === parameters.expectedError);
  if (checkErrorStatus?.status === "bad") {
    return { verified: !vcResult.verified,  result: vcResult };
  }

  throw new Error("Expected Error Not Found: " + parameters.expectedError);
}


// Test Harness Method for Verifying JWT (JOSE) Envelope Presentations
// When isError is turned on the expected verification should fail based on the data
// Types of Failures Include:
// 1. Revoked Credential
// 2. JSON Schema Validation Failure
// 3. Invalid Credential
// 4. Invalid Signature
// 5. Invalid Issuer
// 6. GS1 Validation Credential Chain Error
// 7. GS1 Validation Attribute Error
export const testVerify_jose_presentation = async (parameters?: testHarnessParameters) : Promise<testResult>  => {

  if (!parameters) {
    throw new Error("Missing Parameters: Must pass testing parameters to testVerify_jose_presentation.");
  }

  const jwt = getJwtCredential(parameters.credentialName);
  const vcResult = await verifyEnvelopePresentation(jwt);

  return { verified: parameters.isError ? false : vcResult.verified,  result: vcResult };
 }

 export const testVerify_jose_presentation_Error = async (parameters?: testHarnessParameters) : Promise<testResult>  => {

  if (!parameters) {
    throw new Error("Missing Parameters: Must pass testing parameters to testVerify_jose_presentation.");
  }

  const jwt = getJwtCredential(parameters.credentialName);
  const vcResult = await verifyEnvelopePresentation(jwt);

  const checkErrorStatus = vcResult.verifications?.find(verification => verification.status === "bad" && verification.title === parameters.expectedError);
  if (checkErrorStatus?.status === "bad") {
    return { verified: !vcResult.verified,  result: vcResult };
  }

  throw new Error("Expected Error Not Found: " + parameters.expectedError);
 }

export const setup_jose_tests = function (testHarness: testHarness[]) {

  // JOSE Tests
  testHarness.push({ name: "sample", func: testVerify_jose_credential, type: ["JOSE"], parameters: { credentialName: "sample", testName: "sample_jose_verification"}});
  testHarness.push({ name: "company-prefix", func: testVerify_jose_credential, type: ["JOSE"], parameters: { credentialName: "company-prefix-081015955", testName: "credential_verified_jose"}});
  testHarness.push({ name: "organization", func: testVerify_jose_presentation, type: ["JOSE"], parameters: { credentialName: "company-prefix-organization-data-0810159550000", testName: "credential_verified_jose_presentation_organization"}});
  testHarness.push({ name: "product", func: testVerify_jose_presentation, type: ["JOSE"], parameters: { credentialName: "product-data-00860005769414", testName: "credential_verified_jose_presentation_product"}});
  testHarness.push({ name: "company-prefix-presentation", func: testVerify_jose_presentation, type: ["JOSE"], parameters: { credentialName: "company-prefix-081015955-presentation", testName: "Jose_presentation_company_prefix"}});
  testHarness.push({ name: "company-prefix-presentation-chain", func: testVerify_jose_presentation, type: ["JOSE"], parameters: { credentialName: "prefix-08-company-prefix-081015955-presentation", testName: "Jose_presentation_prefix_company_prefix_chain"}});

  // JOSE Error Tests
  testHarness.push({ name: "error-proof", func: testVerify_jose_credential_Error, type: ["JOSE"], parameters: { credentialName: "company-prefix-081015955-error", testName: "credential_verified_jose_error", isError: true, expectedError: "Proof"}});
  testHarness.push({ name: "error-revocation", func: testVerify_jose_presentation_Error, type: ["JOSE"], parameters: { credentialName: "product-data-00860005769414-revocation", testName: "credential_verified_jose_presentation_product_revocation", isError: true, expectedError: "Revocation"}});
  testHarness.push({ name: "error-JsonSchema", func: testVerify_jose_presentation_Error, type: ["JOSE"], parameters: { credentialName: "product-data-00860005769414-schema", testName: "Jose_presentation_product_schema_error", isError: true, expectedError: "JsonSchema"}});

  // Brand Owner Issued Credentials
  testHarness.push({ name: "gs1_validation_chain_healthytots", func: testVerify_jose_presentation, type: ["JOSE"], parameters: { credentialName: "product-data-0860005769414-ht", testName: "product-data-0860005769414-ht - Healthy Tots"}});
  testHarness.push({ name: "gs1_validation_chain_error", func: testVerify_jose_presentation_Error, type: ["JOSE"], parameters: { credentialName: "product-data-0860005769414-ht-issuer-error", testName: "product-data-0860005769414-ht-issuer-error - Healthy Tots", isError: true, expectedError: "GS1CredentialValidation"}});

}
  