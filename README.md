# React Prototype
## Setup
### terminal
Dependencies:
* npm init  
* npm i react@15.5.4 react-dom@15.5.4 --save  
* npm i webpack@3.4.0 --save-dev  
* npm i webpack@3.4.0 -g  
* npm i babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev
* npm i prop-types@15.5.10 --save
* npm i webpack-dev-server@2.5.0 -g
* npm i webpack-dev-server@2.5.0 --save-dev
* npm i react-hot-loader@3.0.0-beta.7 --save-dev
* npm i html-webpack-plugin@2.29.0 --save-dev

### .gitignore
```
.DS_STORE  
node_modules  
build
```

### webpack.config.js
```
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {

  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
};
```
### index.html
```
<!DOCTYPE html>
<html>
  <head>
    <title>My First React Project</title>
  </head>
  <body>
    <div id="react-app-root">
    </div>
  </body>
  <script src="build/app.bundle.js"></script>
</html>
```
## React Notes
### Functional Programming
React relies on __functional programming__, not object oriented programming.
Object-oriented programming organizes logic around the things an application manages, whereas functional programming organizes an application around the actions it performs.

#### Pure Functions
React functions (components) accept arguments (props) and return a value (React elements). React is pretty flexible but it has a single strict rule: All React components must act like pure functions with respect to their props. There are two things that differentiate pure functions from normal old functions:
* Pure functions' return values are determined using only provided input values.
* Pure functions do not ever alter external state or application data.

__React functions cannot alter their props!__ This would break the second rule above. React components can only take their arguments (props), compose them together into a portion of the UI, and return the JSX results to be rendered.

#### State
If a component needs to alter data, that data must be stored in something called state; never a prop. We'll learn about state next week. But for now make sure your components never alter their props. Props are read-only!

### Components
Basic building blocks of React apps. Everything in React is a component.
* Always import React from the "react" npm package at the top of the file.
* The component is a function! React relies on functional programming; most components are actually functions.
* The component function name always begins with a capital letter and matches the filename.
* The function returns the JSX this component will render in the browser.
* Components reside in their own file, and are exported as a module so other areas of the application may import it.
### Entry Point
In webpack.config.js, we declared index.jsx as our entry point responsible for loading our application. It does this by loading our parent component. The parent component, in turn, loads child components, which then load their child components, so on, and so forth. This entry point is a special type of file. It is not a component. (Notice its filename is not capitalized, either.) Its sole job is loading the parent component and only the parent component.
### Passing Data
React components accept properties (known as props) passed down from a parent. Because React components are functions, these props are a special type of argument.
### PropTypes
While declaring PropTypes is technically optional, it's considered best practice. As React applications grow in size, restricting props' types can be hugely beneficial in preventing errors and bugs. Always declare PropTypes for all component properties in your applications.
#### PropTypes List:
```
MyExampleComponent.propTypes = {
  exampleArray: PropTypes.array,
  exampleBoolean: PropTypes.bool,
  exampleFunction: PropTypes.func,
  exampleNumber: PropTypes.number,
  exampleObject: PropTypes.object,
  exampleString: PropTypes.string,
  exampleSymbol: PropTypes.symbol,
  exampleReactElement: PropTypes.element,
}
```
isRequired:
```
exampleString: PropTypes.string.isRequired
```
arrayOf:
```
exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string)
```
instanceOf:
```
exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName)
```
Enum: restricts variables to one value from a predefined set of constants.
```
optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass'])
```
