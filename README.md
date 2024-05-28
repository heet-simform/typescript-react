# React TypeScript Project

This project is a React application set up with TypeScript and Vite for development, building, and previewing the application. The project also includes ESLint for linting the codebase.

## Project Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (version 14.x or higher recommended)
- npm (version 6.x or higher recommended)

### Installation

1. Clone the repository to your local machine:
    ```sh
    git clone <repository-url>
    ```

2. Navigate into the project directory:
    ```sh
    cd react-ts-project-prep
    ```

3. Install the project dependencies:
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the app in development mode using Vite. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production. It runs TypeScript compiler (`tsc`) followed by Vite's build process. The output files will be in the `dist` folder.

### `npm run lint`

Lints the codebase using ESLint. It checks all `.ts` and `.tsx` files and reports any issues. The linting script also enforces a zero warning policy.

### `npm run preview`

Serves the production build locally. This is useful for previewing the application before deploying.

## Project Structure

- `src/`: Contains the source code for the application.
- `public/`: Static assets that will be served directly.
- `dist/`: Output directory for the production build (created after running `npm run build`).

## Dependencies

### Runtime Dependencies

- `classnames`: Utility for conditionally joining classNames together.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point of the DOM-related rendering paths.
- `react-router-dom`: Declarative routing for React applications.

### Development Dependencies

- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for ReactDOM.
- `@typescript-eslint/eslint-plugin`: ESLint plugin for TypeScript.
- `@typescript-eslint/parser`: TypeScript parser for ESLint.
- `@vitejs/plugin-react`: Vite plugin to support React.
- `eslint`: Pluggable JavaScript linter.
- `eslint-plugin-react-hooks`: ESLint plugin for React hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Fast Refresh.
- `typescript`: TypeScript language.
- `vite`: Next generation front-end tooling.

Please ensure your changes adhere to the project's code style and pass all linting and build checks.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
