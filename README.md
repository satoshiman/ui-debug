# UI Debug

A React component that helps you reduce console log during debugging, displaying raw data without going through the rendering process.

This package is under development

## Installation

```cli
yarn add ui-debug
```

```cli
npm install ui-debug
```

## How to use

```jsx
import Debugger from "ui-debug";
// some states
return (
  <div>
    <Debugger data={{ state1, state2, state3 }} />
  </div>
);
```
