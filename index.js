module.exports = {
  // http://eslint.org/docs/rules/

  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
    'prettier/react',
  ],

  parser: 'babel-eslint',

  plugins: ['prettier', 'jsx-a11y'],

  globals: {
    __DEV__: true,
    clearImmediate: true,
    fetch: true,
    navigator: true,
    Promise: true,
    requestAnimationFrame: true,
    setImmediate: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      blockBindings: true, // enable let and const (aka block bindings)
      modules: true,
      defaultParams: true, // enable default function parameters
      templateStrings: true, // enable template strings
      jsx: true, // enable JSX
      experimentalObjectRestSpread: true,
    },
  },

  env: {
    node: true, // Node.js global variables and Node.js-specific rules.
    es6: true,
    browser: true,
    mocha: true,
  },

  rules: {
    ////////// Best Practices //////////
    'array-callback-return': 2, // enforce return statements in callbacks of array methods
    curly: 2, // specify curly brace conventions for all control statements
    'default-case': 2, // Require Default Case in Switch Statements
    'dot-notation': 2, // encourages use of dot notation whenever possible
    eqeqeq: 2, // require the use of === and !==
    'no-alert': 2, // disallow the use of alert, confirm, and prompt
    'no-extend-native': 2, // disallow adding to native types
    'no-lone-blocks': 2, // disallow unnecessary nested blocks
    'no-loop-func': 2, // disallow creation of functions within loops
    'no-multi-spaces': 2, // disallow use of multiple spaces
    'no-new': 2, // disallow use of new operator when not part of the assignment or comparison
    'no-new-wrappers': 2, // disallows creating new instances of String, Number, and Boolean
    'no-return-assign': 2, // disallow use of assignment in return statement
    'no-sequences': 2, // disallow use of comma operator
    'no-caller': 2, // disallow use of arguments.caller or arguments.callee
    'no-eval': 2, // disallow use of eval()
    'no-extra-bind': 2, // disallow unnecessary function binding
    'no-floating-decimal': 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implied-eval': 2, // disallow use of eval()-like methods
    'no-labels': 2, // disallow use of labeled statements
    'no-iterator': 2, // disallow usage of __iterator__ property
    'no-new-func': 2, // disallow use of new operator for Function object
    'no-octal-escape': 2, // disallow use of octal escape sequences in string literals
    'no-proto': 2, // disallow usage of __proto__ property
    'no-script-url': 2, // disallow use of javascript: urls.
    'no-self-compare': 2, // disallow comparisons where both sides are exactly the same (off by default)
    'no-throw-literal': 2, // no-throw-literal
    'no-unused-expressions': 2, // An unused expression which has no effect on the state of the program indicates a logic error.
    'no-void': 2, // disallow use of void operator (off by default)
    'no-with': 2, // disallow use of the with statement
    radix: 2, // require use of the second argument for parseInt() (off by default)
    'semi-spacing': 2, // require a space after a semi-colon
    yoda: 2, // require or disallow Yoda conditions

    ////////// Variables //////////

    'no-shadow': 2, // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 2, // disallow shadowing of names such as arguments

    //https://github.com/babel/babel-eslint/issues/95 may be relevant
    'no-unused-vars': [2, { vars: 'all', args: 'none' }], // disallow declaration of variables that are not used in the code

    ////////// Node.js //////////

    'handle-callback-err': 2, // enforces error handling in callbacks (off by default) (on by default in the node environment)
    'no-process-exit': 2, // disallow process.exit() (on by default in the node environment)

    // Implement this eventually, it's a problem at the moment for mobile
    camelcase: 0, // require camel case names

    'prefer-arrow-callback': 2,
    'no-const-assign': 2,
    'eol-last': 2, // enforce newline at the end of file, with no multiple empty lines
    'new-parens': 2, // enforce parentheses when invoking a constructor with no arguments
    'no-lonely-if': 2, // disallow if as the only statement in an else block
    'no-new-object': 2, // disallow use of the Object constructor

    // eslint:recommended overrides
    'no-console': [2, { allow: ['warn', 'error'] }],

    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/self-closing-comp': 2,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/prop-types': 0, // eslint:recommended maybe look into turning this on in the future?
    'react/display-name': 0, // eslint:recommended

    'jsx-a11y/alt-text': 2,

    // handles all code styling rules
    'prettier/prettier': [
      2,
      {
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
      },
    ],
  },
};
