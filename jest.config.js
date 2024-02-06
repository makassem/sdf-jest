const SuiteCloudJestConfiguration = require("@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration");
const cliConfig = require("./suitecloud.config");

module.exports = SuiteCloudJestConfiguration.build({
	projectFolder: cliConfig.defaultProjectFolder,
	projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
	customStubs: [
		/* To use custom stubs: Uncomment code below and create a folder named customStubs in your project root */
		// {
		// 	module: "N/http",
		// 	path: "<rootDir>/customStubs/http.js"
		// }
	]
});
