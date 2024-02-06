const SuiteCloudJestUnitTestRunner = require('@oracle/suitecloud-unit-testing/services/SuiteCloudJestUnitTestRunner');

module.exports = {
	defaultProjectFolder: 'src',
	commands: {
		"project:deploy": {
			beforeExecuting: async args => {
				await SuiteCloudJestUnitTestRunner.run({
				    // Jest configuration options.
				});
				return args;
			},
			onCompleted: output => {
                console.log("Eureka! The deployment was a success.");
            },
            onError: error => {
                console.log("Houston, we've had a problem here. The deployment failed.");
            },
		},
	},
};