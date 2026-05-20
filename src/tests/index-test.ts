// Verification Core Library Test Harness:
// Because of external dependencies. This test harness is used instead of Jest based unit tests
// The test harness has file dependencies on the test-data folder located at public/test-data

import {
    showFailedTest,
    showFailedTestError,
    showPassedTest,
} from './test-harness-log.js'
import { testHarness } from './test-types.js'
import { setup_jose_tests } from './jose/jose-test.js'
//import { setup_data_integrity_tests } from './data-integrity/data-integrity-test.js'

const testHarness: testHarness[] = []
// setup_data_integrity_tests(testHarness);
setup_jose_tests(testHarness)

// Check for Test Harness Command Line Parameters
const TEST_HARNESS_ONLY_GS1 =
    process.argv[3] && process.argv[3] === '-gs1' ? true : false
const TEST_HARNESS_ONLY_GS1_ERROR_ONLY =
    process.argv[3] && process.argv[3] === '-error' ? true : false
const TEST_HARNESS_ONLY_GS1_JOSE =
    process.argv[3] && process.argv[3] === '-jose' ? true : false
const TEST_RUN_SINGLE_TEST =
    process.argv[2] && process.argv[2] === '-test' ? process.argv[3] : ''
const RUN_ALL_TESTS =
    process.argv[2] && process.argv[2] === '-all' ? true : false

// Filter Tests to Run Based on Command Line Parameters
const filterTestHarness = function (): testHarness[] {
    if (RUN_ALL_TESTS) {
        return testHarness
    }

    if (
        !TEST_HARNESS_ONLY_GS1 &&
        !TEST_HARNESS_ONLY_GS1_ERROR_ONLY &&
        !TEST_RUN_SINGLE_TEST &&
        !TEST_HARNESS_ONLY_GS1_JOSE
    ) {
        return testHarness.filter((test) => !test.type.includes('ERROR'))
    }

    if (TEST_HARNESS_ONLY_GS1) {
        return testHarness.filter((test) => test.type.includes('GS1'))
    }

    if (TEST_HARNESS_ONLY_GS1_JOSE) {
        return testHarness.filter((test) => test.type.includes('JOSE'))
    }

    if (TEST_HARNESS_ONLY_GS1_ERROR_ONLY) {
        return testHarness.filter((test) => test.type.includes('ERROR'))
    }

    if (TEST_RUN_SINGLE_TEST.length > 0) {
        return testHarness.filter((test) => test.name === TEST_RUN_SINGLE_TEST)
    }

    return testHarness
}

// Execute Test Runner Based on Test Harness Parameters
console.log('\x1b[33m%s\x1b[0m', '***** Starting Tests *****')
filterTestHarness().forEach(async function (testHarness) {
    const funcName = testHarness.parameters
        ? testHarness.parameters.testName
        : testHarness.func.name
    try {
        const testResult = await testHarness.func(testHarness.parameters) // Execute Test Function
        testResult.verified
            ? showPassedTest(funcName, testResult)
            : showFailedTest(funcName, testResult, true)
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : 'Unknown Error'
        showFailedTestError(funcName, errorMessage)
    }
})
