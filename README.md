# Project Overview

This SuiteCloud Account Customization project demonstrates using Test Driven Development (TDD) on a Suitelet to automate tasks like updating the memo field of a Sales Order record. Using TDD helps SuiteScript developers streamline development, ensure a manageable codebase, and minimize bugs.

TDD follows the "red-green-refactor" mantra, emphasizing the importance of writing unit tests before the functional code. The process involves:
1. Writing a failing test before writing any new functional code.
2. Writing just enough functional code to pass the test.
3. Refactoring the code to improve its structure and efficiency, without changing its behavior.

This project serves as a practical example, complemented by technical blog walkthroughs:
- Harnessing the Power of TDD: [Suitelet Walkthrough](https://blogs.oracle.com/developers/post/harnessing-the-power-of-testdriven-development-tdd-a-suitelet-walkthrough)
- A Developer's Guide to Effective Unit Testing with Jest: [Read More](https://blogs.oracle.com/developers/post/a-suitescript-developers-guide-to-effective-unit-testing-with-jest)

Two Suitelets are included:

- `Suitelet.js`: A SuiteScript 2.1 Suitelet for updating a Sales Order memo field.
- `Suitelet-2.js`: A refactored SuiteScript 2.1 Suitelet utilizing `record.submitFields` for better performance.

## Development Dependencies

- `jest`: A delightful JavaScript Testing Framework with a focus on simplicity.
- `@types/jest`: Type definitions for Jest.
- `@oracle/suitecloud-unit-testing`: A SuiteCloud unit testing framework to write unit tests for SuiteScript code.

## Configuration Files

- `suitecloud.config.js`: Configures SuiteCloud project settings, including pre-deployment actions and handling deployment output and errors.
- `jsconfig.json`: Configuration for JavaScript language services in Visual Studio Code, including type acquisition for Jest.
- `jest.config.js`: Configuration for the Jest testing framework, including SuiteCloud project folder and type.

## Pre-requisites (Environment & SDF Setup)

### 1. Install Visual Studio Code (IDE)

- [Download and install Visual Studio Code](https://code.visualstudio.com/)

### 2. Install SuiteCloud Extension for VS Code

1. **Open VS Code**: Start the Visual Studio Code application
2. **Navigate to Extensions**: Click on the Extensions icon in the Activity Bar on the side of the window
3. **Search for SuiteCloud**: Type "SuiteCloud Development Framework" in the search bar
4. **Install the Extension**: Click the "Install" button

### 3. Set Up NetSuite Account Credentials

Follow these steps to configure your NetSuite account credentials:

1. **Open Extension Settings**: Click on the gear icon in the bottom-left corner of the VS Code window.
2. **Find SuiteCloud Section**: Scroll through the settings to locate the "SuiteCloud" section.
3. **Enter Credentials**: Populate the appropriate fields with your NetSuite account credentials.

### 4. Setup SDF Development Environment

Ensure that your SDF and NetSuite account are set up. If your environment is already setup, you can skip this step. If not, watch this [three-part video series](https://videohub.oracle.com/media/Setting+up+NetSuite+to+Use+SDF/1_67268uoj) to get your account set up. Alternatively, you can follow these step-by-step guides published on Oracle Help Center:

1. [Enabling SuiteCloud Development Framework](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4724921034.html)
2. [Assigning Developer Role](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4724921075.html?)
3. [SuiteCloud Account Preferences](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/bridgehead_4730893710.html)
4. [IDE setup based on Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/subsect_1539287603.html)
5. [SDF CLI tools installation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1558708800.html#SuiteCloud-CLI-for-Node.js-Guide)

---

## Get Started

### Step 1: Clone the Repository
Clone the project using the following command in your terminal:
```bash
git clone git@github.com:makassem/sdf-jest.git
```

### Step 2: Navigate to the Project Directory
Change your current directory to the newly cloned project:
```bash
cd sdf-jest
```

### Step 3: Install Dependencies
Install the required dependencies using npm:
```bash
npm install
```

### Step 4: Open Current Directory in VS Code
Now, from terminal, you can open the current directory in VS Code using the following script:
```bash
code .
```
If that command doesn't work, it likely means that VS Code is not in your environment variable $PATH. Follow these instructions to get it installed:

1. Open VS Code
2. Access the Command Palette by pressing `⌘⇧P` (`Ctrl+Shift+P` on Windows).
3. In the Command Palette, type `shell command` to search for shell commands.
4. Type and select `Install 'code' command in PATH`.

After executing the command, restart the terminal for the new $PATH value to take effect. You'll be able to simply type 'code .' in any folder to start editing files in that folder. The "." means "current directory".

### Step 5: Run the tests
Runs Jest to watch all tests with verbose output and coverage reports:
```
npm run test
```

### Step 6: Validate the Project Deployment
Dry run of project deployment to validate the deployment process:
```
npm run validate
```
### Step 7: Deploy Project
Deploys your local SuiteCloud project to your NetSuite account:
```
npm run deploy
```

## Security

Please consult the [security guide](https://github.com/oracle-samples/netsuite-suitecloud-samples/blob/main/SECURITY.md) for our responsible security vulnerability disclosure process.

## License

Copyright (c) 2024 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.

Released under the Universal Permissive License v1.0 as shown at [https://oss.oracle.com/licenses/upl/](https://oss.oracle.com/licenses/upl/).

## Disclaimer

This project is author opinionated and is not officially supported by Oracle + NetSuite Inc. The sample code included herein is provided on an "as is" basis, without warranty of any kind, to the fullest extent permitted by law. Oracle + NetSuite Inc. does not warrant or guarantee the individual success developers may have in implementing the sample code on their development platforms or in using their own Web server configurations. Oracle + NetSuite Inc. does not warrant, guarantee or make any representations regarding the use, results of use, accuracy, timeliness or completeness of any data or information relating to the sample code. Oracle + NetSuite Inc. disclaims all warranties, express or implied, and in particular, disclaims all warranties of merchantability, fitness for a particular purpose, and warranties related to the code, or any service or software related thereto. Oracle + NetSuite Inc. shall not be liable for any direct, indirect or consequential damages or costs of any type arising out of any action taken by you or others related to the sample code.