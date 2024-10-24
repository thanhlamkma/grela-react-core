# React JS Core By Grela

## Libraries

### Dependencies

`prettier`: A code formatter that automatically formats JavaScript code according to predefined style rules.

`eslint-config-prettier`: An ESLint configuration that disables ESLint rules that conflict with Prettier's formatting rules.

`eslint-plugin-prettier`: An ESLint plugin that adds additional Prettier rules to ESLint.

`@ant-design/icons`: A collection of icons for use in React applications, based on the Ant Design design system.

`antd`: A UI component library for React, providing a wide range of pre-built components for various user interface elements.

`classnames`: A utility library for conditionally joining CSS class names based on JavaScript expressions.

`react-router-dom`: A library for routing in React applications, allowing you to create single-page applications with multiple views.

`remirror`: A rich text editor framework for React, providing a flexible and customizable way to create text editors.

`@tanstack/react-query`: A data fetching library for React, simplifying data fetching and management in your applications.

`recoil`: A state management library for React, providing a simple and efficient way to manage global state in your applications.

`axios`: A promise-based HTTP client for making requests to REST APIs.

`clsx`: A utility library for conditionally joining CSS class names, similar to classnames.

`framer-motion`: A motion library for React, providing animations and gestures for your components.

`lodash-es`: A modularized version of the Lodash utility library, providing a collection of functions for working with arrays, objects, strings, and more.

`i18next`: A localization and internationalization framework for web applications, allowing you to translate your application into multiple languages

### devDependencies

`autoprefixer`: When you use new CSS properties, different browsers may support them differently. autoprefixer will automatically add the necessary CSS prefixes to ensure compatibility with older browsers.

`postcss`: postcss is a powerful tool that allows you to customize how CSS is processed. You can use plugins to perform tasks such as adding CSS prefixes, optimizing CSS, and more.

`sass-loader`: To use Sass in React projects, you need to use sass-loader in your Webpack configuration. This allows Webpack to understand and process Sass files.

`sass`: Sass is an extended CSS language that provides features like variables, nesting, mixins, etc. This helps you write CSS more efficiently and maintainable.

`tailwindcss`: tailwindcss is a utility-first CSS framework, meaning it provides a set of CSS classes that can be combined to create custom interfaces. This helps you quickly build complex interfaces without writing much custom CSS.

## Configuration: prettier, tsconfig, editorconfig - Configurations

Configuration guide: https://duthanhduoc.com/blog/tao-du-an-react-vite-typescript-eslint#cau-truc-thu-muc-reactjs-vite

### Step 1: Configure ESLint for code standardization

Open `eslint.config.js`

Add this value to the `ignores` array so that ESLint doesn't check the `vite.config.ts` file:

```ts
"vite.config.ts";
```

Import this at the beginning of the `eslint.config.js` file:

```ts
import eslintPluginPrettier from "eslint-plugin-prettier";
```

Add the following code to the plugins object:

```ts
prettier: eslintPluginPrettier;
```

Add the following code to the rules object to add Prettier rules:

```ts
'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
```

### Step 2: Configure Prettier to format code

Create a `.prettierrc` file in the root directory with the following content:

```json
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

Install the Prettier Extension -` Code formatter for VS Code` for VS Code to understand it.

Next, create a `.prettierignore` file in the root directory.

The purpose is for Prettier to ignore unnecessary files:

```ignore
node_modules/
dist/
```

### Step 3: Configure editor to standardize editor configuration

Create a `.editorconfig` file in the root directory.

The purpose is to configure the settings to synchronize different editors if the project has multiple contributors.

Install the Extension: `EditorConfig for VS Code` for VS Code to understand this file:

```editorconfig
[*]
indent_size = 2
indent_style = space
```

### Step 4: Configure alias for tsconfig.json

Adding an alias to the tsconfig.json file will help VS Code understand and automatically import for you.

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

The meaning of this section is that we can `import Login from '@/pages/Login'` instead of `import Login from '../../pages/Login'`.

### Step 5: Configure alias for vite `vite.config.ts`

Install the package @types/node to use node js in ts files without errors.

```bash
npm i @types/node -D
```

Configure alias and enable source map in the `vite.config.ts` file:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
```

## Commands

`yarn dev`: Run project

`yarn build`: Build project

`yarn preview`: Preview build results using the command

`yarn lint`: Check the project for ESLint errors

`yarn lint:fix`: Automatically fix ESLint-related errors (not everything can be fixed, but it fixes a lot)

`yarn prettier`: Check the project for Prettier errors

`yarn prettier:fix`: Automatically fix Prettier-related errors

## Fix Dart Sass version 2.0.0 - 3.0.0

```bash
npm install -g sass-migrator
sass-migrator module --migrate-deps .\src\styles\global.scss
```
