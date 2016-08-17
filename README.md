# Feathers-react-helpers

A small library that provides helpers to connect components to the feathers client app. WORK IN PROGRESS

## Installation

`npm install --save feathers-react-helpers`

## Usage

```
const FeathersConnector = require('feathers-react-helpers').FeathersConnector;
                             OR
import { FeathersConnector } from 'feathers-react-helpers';

const app = feathers()
  .configure(...)
  ...
  ...

render(
  <Provider store={store}>
    <FeathersConnector feathers={app}>
      ...
    </FeathersConnector>
  </Provider>,
  document.getElementById('app')
);
```
