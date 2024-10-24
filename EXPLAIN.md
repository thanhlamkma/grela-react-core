# Explain all files

## `.prettierc`

`"arrowParens": "always"`
This rule specifies that arrow functions should always have parentheses around their arguments, even if there is only one argument. For example:

```js
const add = (a, b) => a + b; // Correct
const greet = (name) => `Hello, ${name}`; // Incorrect, should be (name) =>
```

`"semi": true`
This rule requires semicolons at the end of statements. For example:

```js
let x = 10; // Correct
let y = 20; // Incorrect, missing semicolon
```

`"trailingComma": "none"`
This rule disallows trailing commas in arrays and objects. For example:

```js
const array = [1, 2, 3]; // Incorrect, trailing comma
const object = { a: 1, b: 2 }; // Correct
```

`"tabWidth": 2`
This rule sets the tab width to 2 spaces. This is a common convention for indentation in JavaScript code.

`"endOfLine": "auto"`
This rule automatically determines the end-of-line character based on the operating system.

`"useTabs": false`
This rule specifies that spaces should be used for indentation instead of tabs.

`"singleQuote": true`
This rule specifies that single quotes should be used for strings instead of double quotes.

`"printWidth": 120`
This rule sets the maximum line length to 120 characters. If a line exceeds this limit, the formatter will automatically wrap it.

`"jsxSingleQuote": false`
This rule specifies that single quotes should be used for JSX attributes instead of double quotes. This is a common convention in React development.
