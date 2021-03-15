# Clarity Design Addon Kit

This is a wip starter kit to provide a way to build lightweight Web Components
using the [Clarity Design System](https://clarity.design).

## Getting Started

To run the project first install the dependencies by running `npm install`.
Once installed start the local project by running `npm run start`.

## Commands

- `start`: runs local dev build and server in watch mode.
- `clean`: cleans any prior build artifacts.
- `build`: builds library into dist directory for publication.
- `test`: runs unit tests
- `test:watch`: runs unit tests in a watch mode
- `lint`: runs code linting
- `format`: runs code formatting (prettier)

## Publishing

When ready to publish a new version of your library follow these steps:

1. Update the version in the `./src/package.json` file.
2. Run command `npm run build`.
3. Publish the output contents of `./dist/lib` to your package registry of choice.

## Additional Notes

- The `src/package.json` is the package file that will be published while the root `package.json` is for local dev build tools and dependencies.

- When adding a new component be sure to add the `register.js` to the `sideEffects` entry in the `./src/package.json` file. This ensure proper tree shaking of the Web Components.
