# GoTrip React Project

This project is a React-based web application utilizing a variety of libraries and tools. Below are the instructions to get started with development, building, and deploying the project.

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your system.

## Installation

To install the project dependencies, navigate to the root directory of the project and run:

```bash
yarn install
```

This will install all necessary dependencies as listed in package.json.

## Running the Development Server

Start the development server with the following command:

```bash
yarn dev
```

This will launch the Vite development server. By default, the application will be available at http://localhost:3000, but this can vary based on your Vite configuration.
Building the Project

To build the project for production, run:

```bash
yarn build
```

This will create a dist directory with the compiled assets, ready for deployment.
## Linting

Ensure your code conforms to the project's coding standards by running the ESLint linter:

```bash
yarn lint
```
To automatically fix linting errors where possible:

```bash
    yarn lint --fix
```
Previewing the Build

After building the project, you can preview the production build using:

To deploy the build to GitHub Pages:

Additional Information

    This project uses React 18.2.0 and Vite 4.5.2, along with other dependencies.
    Project configuration and scripts are defined in package.json.

For more detailed information, refer to the individual package documentation and the project's documentation.
