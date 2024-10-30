import { verificationResult } from "@gs1us/vc-verifier-rules/dist/lib/types.js";

import { verifyCredential, verifyPresentation } from "../../lib/data-integrity/index.js";
import { getTestCredential, getTestPresentation } from "../../lib/cache/local-cache.js";
import { testResult, testHarness } from "../test-types.js";
import { testMappingCredential_failResult, testMappingCredential_notVerified, testMappingCredential_null, testMappingCredential_passResult, testMappingCredential_undefined, testMappingCredential_Verified } from "../mapper-test.js";

// Verify Sample Company Prefix VC
export const testVerify_companyPrefix = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("company-prefix-08600057694"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }
 
 // Verify Sample (GLN) Key Credential VC
 export  const testVerify_key = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-organization-key-0860005769407"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

 // Verify Sample (GLN) Organization Credential VC
 export  const testVerify_organization = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-organization-data-0860005769407"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

 // Verify Sample (GLN) Key Credential VC
 export  const testVerify_key_product = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-key-00860005769421"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

 // Verify Sample (GLN) Organization Credential VC
 export  const testVerify_product = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-data-00860005769421"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

// Test VC that fails proof verification
export const testVerify_fail = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("credential-proof-fail"));
   return { verified: vcResult.verified == false,  result: vcResult };
 }

 // Test VC Presentation with generic Credential 
 export const testPresentation = async () : Promise<testResult>  =>  {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("presentation-test"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

// Verify Sample Company Prefix VC
export const testVerify_identityKeyProduct = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("identity-key-00860005769414"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }
 
 export const testVerify_identityKeyProduct_key = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("identity-key-product-key-00860005769414"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }
 
 export const testVerify_identityKeyProduct_data = async ()  : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("identity-key-product-data-00860005769414"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 export const testVerify_gs1_validation_chain = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-data-00860005769438-error-chain"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 export const testVerify_gs1_validation_chain_companyPrefix = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-data-00960005769421-error-chain"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 export const testVerify_gs1_validation_chain_companyPrefix_prefixLicense = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("company-prefix-09600057694-error"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 export const testVerify_gs1_validation_chain_companyPrefix_prefixLicenseMissing = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("company-prefix-08600057694-error"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 export const setup_data_integrity_tests = function (testHarness: testHarness[]) {
  testHarness.push({ name: "verify_pass", func: testPresentation, type: ["Generic"]});
  testHarness.push({ name: "verify_fail", func: testVerify_fail, type: ["Generic"]});
  testHarness.push({ name: "dip-company_prefix", func: testVerify_companyPrefix, type: ["GS1"]});
  testHarness.push({ name: "dip-key_organization", func: testVerify_key, type: ["GS1"]});
  testHarness.push({ name: "dip-organization", func: testVerify_organization, type: ["GS1"]});
  testHarness.push({ name: "dip-key_product", func: testVerify_key_product, type: ["GS1"]});
  testHarness.push({ name: "dip-product", func: testVerify_product, type: ["GS1"]});
  testHarness.push({ name: "dip-credential_null", func: testMappingCredential_null, type: ["Generic"]});
  testHarness.push({ name: "dip-credential_undefined", func: testMappingCredential_undefined, type: ["Generic"]});
  testHarness.push({ name: "dip-credential_notVerified", func: testMappingCredential_notVerified, type: ["Generic"]});
  testHarness.push({ name: "dip-credential_verified", func: testMappingCredential_Verified, type: ["Generic"]});
  testHarness.push({ name: "dip-credential_pass", func: testMappingCredential_passResult, type: ["Generic"]});
  testHarness.push({ name: "dip-credential_fail", func: testMappingCredential_failResult, type: ["Generic"]});
  testHarness.push({ name: "dip-gs1_validation_chain_error", func: testVerify_gs1_validation_chain, type: ["ERROR"]});
  testHarness.push({ name: "dip-gs1_validation_chain_company_prefix_error", func: testVerify_gs1_validation_chain_companyPrefix, type: ["ERROR"]});
  testHarness.push({ name: "dip-gs1_validation_chain_company_prefix_error_missing", func: testVerify_gs1_validation_chain_companyPrefix_prefixLicenseMissing, type: ["ERROR"]});
}
