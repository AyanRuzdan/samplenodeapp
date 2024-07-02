# Sample Node.js Project

This is a sample Node.js project with a simple addition function and a testing script.

## GitHub Actions Pipeline

This repository uses GitHub Actions to automate the build and test processes.

### Workflow

The workflow is defined in the `.github/workflows/main.yml` file and is triggered on pushes to the `main` branch. It includes the following steps:

1. **Checkout code**: Checks out the repository code.
2. **Set up Node.js**: Sets up Node.js environment.
3. **Install dependencies**: Installs project dependencies using `npm install`.
4. **Run tests**: Executes the tests using `node test.js` and mocha.
5. **Notifications**: Outputs the status of the build and test process, and also notifies if the tests passed or failed.

### Testing

To test the GitHub Actions pipeline:

1. Push changes to the `main` branch.
2. Check the Actions tab in the GitHub repository to see the workflow run and its status.
