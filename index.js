module.exports = {
  // http://eslint.org/docs/rules/

  "parser": "babel-eslint",

  "plugins": [
    "react"
  ],

  "globals": {
    "__DEV__": true,
    "clearImmediate": true,
    "fetch": true,
    "navigator": true,
    "Promise": true,
    "requestAnimationFrame": true,
    "setImmediate": true,
  },

  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "blockBindings": true,                      // enable let and const (aka block bindings)
      "modules": true,
      "defaultParams": true,                      // enable default function parameters
      "templateStrings": true,                    // enable template strings
      "jsx": true,                                // enable JSX
      "experimentalObjectRestSpread": true
    },
  },

  "env": {
    "node": true,         // Node.js global variables and Node.js-specific rules.
    "es6": true,
    "browser": true,
    "mocha": true
  },

  "rules": {
    "no-cond-assign": 2,          // disallow assignment in conditional expressions
    "no-dupe-keys": 2,            // disallow duplicate keys when creating object literals
    "no-extra-semi": 2,           // disallow unnecessary semicolons
    "no-func-assign": 2,          // disallow overwriting functions written as function declarations
    "no-inner-declarations": 2,   // disallow function or variable declarations in nested blocks
    "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
    "no-unreachable": 2,          // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 2,               // disallow comparisons with the value NaN
    "valid-typeof": 2,            // Ensure that the results of typeof are compared against a valid string
    "no-control-regex": 2,        // disallow control characters in regular expressions
    "no-debugger": 2,             // disallow use of debugger
    "no-ex-assign": 2,            // disallow assigning to the exception in a catch block
    "no-invalid-regexp": 2,       // disallow invalid regular expression strings in the RegExp constructor
    "no-obj-calls": 2,            // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-sparse-arrays": 2,        // disallow sparse arrays

    ////////// Best Practices //////////

    "curly": 2,                 // specify curly brace conventions for all control statements
    "dot-notation": 2,          // encourages use of dot notation whenever possible
    "eqeqeq": 2,                // require the use of === and !==
    "no-alert": 2,              // disallow the use of alert, confirm, and prompt
    "no-extend-native": 2,      // disallow adding to native types
    "no-lone-blocks": 2,        // disallow unnecessary nested blocks
    "no-loop-func": 2,          // disallow creation of functions within loops
    "no-multi-spaces": 2,       // disallow use of multiple spaces
    "no-native-reassign": 2,    // disallow reassignments of native objects
    "no-new": 2,                // disallow use of new operator when not part of the assignment or comparison
    "no-new-wrappers": 2,       // disallows creating new instances of String, Number, and Boolean
    "no-return-assign": 2,      // disallow use of assignment in return statement
    "no-sequences": 2,          // disallow use of comma operator
    "no-caller": 2,             // disallow use of arguments.caller or arguments.callee
    "no-eval": 2,               // disallow use of eval()
    "no-extra-bind": 2,         // disallow unnecessary function binding
    "no-fallthrough": 2,        // disallow fallthrough of case statements
    "no-floating-decimal": 2,   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 2,       // disallow use of eval()-like methods
    "no-labels": 2,             // disallow use of labeled statements
    "no-iterator": 2,           // disallow usage of __iterator__ property
    "no-new-func": 2,           // disallow use of new operator for Function object
    "no-octal": 2,              // disallow use of octal literals
    "no-octal-escape": 2,       // disallow use of octal escape sequences in string literals
    "no-proto": 2,              // disallow usage of __proto__ property
    "no-script-url": 2,         // disallow use of javascript: urls.
    "no-self-compare": 2,       // disallow comparisons where both sides are exactly the same (off by default)
    "no-void": 2,               // disallow use of void operator (off by default)
    "no-with": 2,               // disallow use of the with statement
    "radix": 2,                 // require use of the second argument for parseInt() (off by default)
    "semi-spacing": 2,          // require a space after a semi-colon
    "yoda": 2,                  // require or disallow Yoda conditions

    ////////// Variables //////////

    "no-shadow": 2,                   // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 2,  // disallow shadowing of names such as arguments
    "no-undef": 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block

    //https://github.com/babel/babel-eslint/issues/95 may be relevant
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],  // disallow declaration of variables that are not used in the code

    ////////// Node.js //////////

    "handle-callback-err": 2,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-process-exit": 2,       // disallow process.exit() (on by default in the node environment)

    ////////// Stylistic Issues //////////

    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }], // enforce one true brace style (off by default)
    // Implement this eventually, it's a problem at the moment for mobile
    "camelcase": 0,                 // require camel case names
    "comma-spacing": [2, {"before": false, "after": true}],
                                    // enforce spacing before and after comma
    "comma-style": [2, "last"],     // enforce one true comma style (off by default)
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
                                    // enforces spacing between keys and values in object literal properties
    "no-trailing-spaces": 2,        // disallow trailing whitespace at the end of lines

    "prefer-arrow-callback": 2,
    "no-const-assign": 2,
    "object-curly-spacing": [2, "always"],
    "eol-last": 2,                  // enforce newline at the end of file, with no multiple empty lines
    "new-parens": 2,                // enforce parentheses when invoking a constructor with no arguments
    "no-lonely-if": 2,              // disallow if as the only statement in an else block
    "no-new-object": 2,             // disallow use of the Object constructor
    "no-spaced-func": 2,            // disallow space between function identifier and application
    "quotes": [2, "single", "avoid-escape"],
                                    // specify whether double or single quotes should be used
    "semi": 2,                      // require or disallow use of semicolons instead of ASI
    "jsx-quotes": [1, "prefer-double"],

    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    "react/no-did-update-set-state": [2, "allow-in-func"],
    "react/self-closing-comp": 2,
    "react/jsx-closing-bracket-location": [2, {
      "nonEmpty": "tag-aligned",
      "selfClosing": "tag-aligned"
    }],
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent": [2, 2],
    "react/jsx-no-duplicate-props": [2, { "ignoreCase": true }],
  }
}
