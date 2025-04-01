import { verificationResult } from "@gs1us/vc-verifier-rules/dist/lib/types"

// Test Parameters for the Test Harness
// credentialName: Name of the Credential to Test
// testName: Name of the Test
// isError: Is the Test Expected to Generate an Error
// expectedError: Expected Error Status
export type testHarnessParameters = {
    credentialName: string,
    testName: string,
    isError?: boolean,
    expectedError?: string 
  }
   
// Test Harness Configuration Settings
export type testHarness = {
   name?: string,
   // eslint-disable-next-line
   func: Function,
   type: string[],
   parameters?: testHarnessParameters
}
  
  // Test Result Output
  // Verified: Did the test generate the expected outcome. 
  // Developer Notes: Will Return True if the test expects to get an error
  // Result from Verifying the Verifiable Credential. 
  export type testResult = {
     verified: boolean,
     result: verificationResult
  }
  