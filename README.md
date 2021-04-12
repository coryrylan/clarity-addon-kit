# Clarity Design Addon Kit

This project is a small starter kit to provide a way to build lightweight Web Components using the [Clarity Design System](https://clarity.design). This starter is boot-strapped with [open-wc](https://open-wc.org/) using `npm init @open-wc` and pre-installed with Clarity Core.

## Getting Started

To run the project, install the dependencies by running `npm install`.
Once installed, start the local project by running `npm run start`.

## Commands

- `start`: runs local dev build and server in watch mode.
- `clean`: cleans any prior build artifacts.
- `build`: builds library into dist directory for publication.
- `test`: runs unit tests
- `test:watch`: runs unit tests in a watch mode
- `lint`: runs code linting
- `format`: runs code formatting (prettier)
- `storybook`: runs the storybook dev server, `start` must also run in parallel

## Publishing

When ready to publish a new version of your library, follow these steps:

1. Update the version in the `./src/package.json` file.
2. Run the command `npm run build`.
3. Publish the output contents of `./dist/src` to your package registry of choice.

## Additional Resources

- [Intro to Web Components](https://coryrylan.com/blog/state-of-web-components-in-2020)

- [Get started with LitElement](https://lit-element.polymer-project.org/)

- [Web Component Authoring best practices](https://open-wc.org/)

- [Web Component Performance best practices](https://medium.com/claritydesignsystem/design-system-performance-with-clarity-core-web-components-fbab56516f30).

- [Clarity Core Internal Library Architecture](https://clarity.design/storybook/core/?path=/story/internal-documentation-getting-started--page)
