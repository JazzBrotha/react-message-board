# react-message-board

This application displays a message board where an active user can create, edit, delete, and comment messages.

## Prerequisites

Required in order to run the application:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

The minimum recommended version for `node.js` is 10.0.0, and for `npm` 5.6.0.

## Setup

### Installation

In order to run the application, you need to install [JSON Server](https://github.com/typicode/json-server) globally on your machine

```bash
npm install -g json-server
```

Once you have installed JSON server, move into the project folder and run the following command to install all the project dependencies,

```bash
npm install
```

### Launching the application in development mode

Still in the project folder, start the JSON server by running

```bash
json-server ./db/db.json
```

JSON server should now be running on `http://localhost:3000`.

Open a new window in your terminal and the start the development server by running

```bash
npm run start
```

### Running tests

You can run unit tests with the following command

```bash
npm run test
```

You should now be able to access the application in the browser on `http://localhost:8080`.

### Building the application for production

You can create a production build of the application by running

```bash
npm run build
```

A `dist` folder should now have been created with three files, `bundle.js`, `bundle.js.map`, and `index.html`. Simply double click on `index.html` to run the application in the browser. Please note that you still need to have the JSON server running in order to use the application.

## Technologies used

The application is build with [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [Material UI](https://material-ui.com/). It uses [TypeScript](https://www.typescriptlang.org/) as a compiler, [Webpack](https://webpack.js.org/) for bundling, and [Prettier](https://prettier.io/) for code formatting.

## Support

The application is tested on a Linux machine in Mozilla Firefox 62.0.3 and Google Chrome 69.0.3. Keyboard navigation should be fully supported and color contrasts should meet WCAG 2.1 minimum requirements.

## Limitations

Given more time with the project, the necessary unit tests could have been set up. More browser testing could have been done, i.e Safari, MS Edge, and Internet Explorer. Also, further accessibility testing in terms of assistive technologies such as screen readers could have have been performed.
