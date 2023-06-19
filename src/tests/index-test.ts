// Verification Core Library Test Harness:
// Because of external dependencies. This test harness is used instead of Jest based unit tests
// The test harness has file dependencies on the test-data folder located at public/test-data

import { verifyCredential, verifyPresentation } from "../lib/index.js";
import { getTestCredential, getTestPresentation } from "../lib/resolver/local-cache.js";
import { testMappingCredential_Verified, testMappingCredential_failResult, testMappingCredential_notVerified, testMappingCredential_null, testMappingCredential_passResult, testMappingCredential_undefined } from "./mapper-test.js";
import { showFailedTest, showPassedTest } from "./test-harness-log.js";

// @ts-ignore
import { verificationResult } from '@gs1us/vc-verifier-rules';

 
// Setup Test Harness
type testHarness = {
  name: string,
   func: Function,
   type: string[]
}

type testResult = {
   verified: boolean,
   result: verificationResult
}

// Verify Sample Company Prefix VC
const testVerify_companyPrefix = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("company-prefix-08600057694"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }
 
 // Verify Sample (GLN) Key Credential VC
const testVerify_key = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-organization-key-0860005769407"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

 // Verify Sample (GLN) Organization Credential VC
 const testVerify_organization = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-organization-data-0860005769407"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

 // Verify Sample (GLN) Key Credential VC
 const testVerify_key_product = async () : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-key-00860005769421"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

 // Verify Sample (GLN) Organization Credential VC
 const testVerify_product = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-data-00860005769421"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

// Test VC that fails proof verification
 const testVerify_fail = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("credential-proof-fail"));
   return { verified: vcResult.verified == false,  result: vcResult };
 }

 // Test VC Presentation with generic Credential 
 const testPresentation = async () : Promise<testResult>  =>  {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("presentation-test"));
   return { verified: vcResult.verified == true,  result: vcResult };
}

// Verify Sample Company Prefix VC
const testVerify_identityKeyProduct = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("identity-key-00860005769414"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }
 
 const testVerify_identityKeyProduct_key = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("identity-key-product-key-00860005769414"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }
 
 const testVerify_identityKeyProduct_data = async ()  : Promise<testResult> => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("identity-key-product-data-00860005769414"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 const testVerify_gs1_validation_chain = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-data-00860005769438-error-chain"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 const testVerify_gs1_validation_chain_companyPrefix = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyPresentation(getTestPresentation("company-prefix-product-data-00960005769421-error-chain"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 const testVerify_gs1_validation_chain_companyPrefix_prefixLicense = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("company-prefix-09600057694-error"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

 const testVerify_gs1_validation_chain_companyPrefix_prefixLicenseMissing = async () : Promise<testResult>  => {
   const vcResult: verificationResult = await verifyCredential(getTestCredential("company-prefix-08600057694-error"));
   return { verified: vcResult.verified == true,  result: vcResult };
 }

const testHarness: testHarness[] = [];
testHarness.push({ name: "verify_pass", func: testPresentation, type: ["Generic"]});
testHarness.push({ name: "verify_fail", func: testVerify_fail, type: ["Generic"]});
testHarness.push({ name: "company_prefix", func: testVerify_companyPrefix, type: ["GS1"]});
testHarness.push({ name: "key_organization", func: testVerify_key, type: ["GS1"]});
testHarness.push({ name: "organization", func: testVerify_organization, type: ["GS1"]});
testHarness.push({ name: "key_product", func: testVerify_key_product, type: ["GS1"]});
testHarness.push({ name: "product", func: testVerify_product, type: ["GS1"]});
testHarness.push({ name: "credential_null", func: testMappingCredential_null, type: ["Generic"]});
testHarness.push({ name: "credential_undefined", func: testMappingCredential_undefined, type: ["Generic"]});
testHarness.push({ name: "credential_notVerified", func: testMappingCredential_notVerified, type: ["Generic"]});
testHarness.push({ name: "credential_verified", func: testMappingCredential_Verified, type: ["Generic"]});
testHarness.push({ name: "credential_pass", func: testMappingCredential_passResult, type: ["Generic"]});
testHarness.push({ name: "credential_fail", func: testMappingCredential_failResult, type: ["Generic"]});
testHarness.push({ name: "identity_key_product", func: testVerify_identityKeyProduct, type: ["GS1"]});
testHarness.push({ name: "identity_key_product_key", func: testVerify_identityKeyProduct_key, type: ["GS1"]});
testHarness.push({ name: "identity_key_product_key_data", func: testVerify_identityKeyProduct_data,type: ["GS1"]});
testHarness.push({ name: "gs1_validation_chain_error", func: testVerify_gs1_validation_chain, type: ["ERROR"]});
testHarness.push({ name: "gs1_validation_chain_company_prefix_error", func: testVerify_gs1_validation_chain_companyPrefix, type: ["ERROR"]});
testHarness.push({ name: "gs1_validation_chain_company_prefix_error_missing", func: testVerify_gs1_validation_chain_companyPrefix_prefixLicenseMissing, type: ["ERROR"]});

// Check for Test Harness Command Line Parameters
const TEST_HARNESS_ONLY_GS1 = process.argv[2] && process.argv[2] === '-gs1' ? true : false;
const TEST_HARNESS_ONLY_GS1_ERROR_ONLY = process.argv[3] && process.argv[3] === '-error' ? true : false;
const TEST_RUN_SINGLE_TEST = process.argv[2] && process.argv[2] === '-test' ? process.argv[3] : "";
const RUN_ALL_TESTS = process.argv[2] && process.argv[2] === '-all' ? true : false;

// Filter Tests to Run Based on Command Line Parameters
const filterTestHarness = function() : testHarness[] {

    if (RUN_ALL_TESTS) {
      return testHarness;
    }

   if (!TEST_HARNESS_ONLY_GS1 && !TEST_HARNESS_ONLY_GS1_ERROR_ONLY && !TEST_RUN_SINGLE_TEST) {
    return testHarness.filter(test => !test.type.includes("ERROR"));
   }

   if (TEST_RUN_SINGLE_TEST.length > 0) {
    return testHarness.filter(test => test.name === TEST_RUN_SINGLE_TEST);
   }

   if (TEST_HARNESS_ONLY_GS1_ERROR_ONLY) {
      return testHarness.filter(test => test.type.includes("ERROR"));
   }

   return testHarness.filter(test => test.type.includes("GS1"));
}

// Execute Test Runner Based on Test Harness Parameters
console.log('\x1b[33m%s\x1b[0m', '***** Starting Tests *****'); 
filterTestHarness().forEach(async function(testHarness){
   const testResult = await testHarness.func(); // run your function
   testResult.verified ? showPassedTest(testHarness.func.name, testResult) : showFailedTest(testHarness.func.name, testResult);

})

