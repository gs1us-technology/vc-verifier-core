// @ts-ignore
import { verificationResult } from '@gs1us/vc-verifier-rules';

// Test Harness Configuration Flags
const SHOW_OUTPUT_RESULT_VERIFIED = false;
const SHOW_OUTPUT_RESULT_ERROR = true;

export const showFailedTest = function(testName: string, testResult: verificationResult) : void {
   console.log('\x1b[31m%s\x1b[0m', `${testName}: ${testResult.verified}`); 

   if (SHOW_OUTPUT_RESULT_ERROR) {
      const result = JSON.stringify(testResult, null, 4);
      console.log('\x1b[31m%s\x1b[0m', `\nTest Result: ${result}`);
   }
}

export const showPassedTest = function(testName: string, testResult: verificationResult) : void {
   console.log('\x1b[32m%s\x1b[0m', `${testName}: ${testResult.verified}`); 

   if (SHOW_OUTPUT_RESULT_VERIFIED) {
      const result = JSON.stringify(testResult, null, 4);
      console.log('\x1b[32m%s\x1b[0m', `\nTest Result: ${result}`);
   }
}