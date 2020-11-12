# Cake store
## Overview
This app was created for the Chingu Voyage 24. It is a  frontend API-ready section for the imaginary store selling sweets and cookies. 

**LIVE LINK:** [https://v24-toucans-team-01.netlify.app/](https://v24-toucans-team-01.netlify.app/)

![Cake_store_screenshot](https://user-images.githubusercontent.com/47148325/98958070-f41b4900-2512-11eb-9e41-cd67a4952dda.jpg)


## Features

 - Fully responsive mobile layout for the devices with screen widths up  to 240px
 - Products in the Store section are being  generated dynamically via  JSON objects with possibility to use custom APIs
 - Add-to-cart function for every product on the page 
 - Product sorting function for various categories (cakes, sweets, etc...)
 - Product search function
 - Cart total product calculation and update if necessary
 - Various styling effects: background video in the  hero section which changes to static image for lower resolution, parallax scroll & scrollspy 
 
## Tech used / dependencies
1.  [ESlint](https://eslint.org/)
2. [Prettier](https://prettier.io/)
3. [Parcel](https://parceljs.org/)
4. [Bootstrap v.5](https://v5.getbootstrap.com/) for some additional styling
5. Fonts from [Google Fonts](https://fonts.google.com/)
6. Icons made by [Freepik](https://www.freepik.com/) & [Font Awesome](https://fontawesome.com/)
7. Images from [Unsplash](https://unsplash.com/) & background video from [Coverr](https://coverr.co/)
8. Gradients inspired by [Colorzilla](https://www.colorzilla.com/gradient-editor/)

## This project is using the airbnb style guide, please follow the steps bellow for installation

### Installation

1.  Navigate to your app directory where you want to include this style configuration.
    
    cd my-app
    
2.  Run this command inside your app's root directory. Note: this command executes the `eslint-prettier-config.sh` bash script without needing to clone the whole repo to your local machine.
    
    exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/paulolramos/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
    
3.  Make selections for your preference of package manager (npm or yarn), file format (.js or .json), max-line size, and trailing commas (none, es5, all).
    
4.  Look in your project's root directory and notice the two newly added/updated config files:
    
    -   `.eslintrc.js` or `.eslintrc.json`
    -   `.prettierrc.js` or `.prettierrc.json`
    
    In case you don't know which config to use download our .eslintrc.json file
### Airbnb Configuration

1. [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
   - This package provides Airbnb's .eslintrc as an extensible shared config.
2. [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) (Peer Dependency)
   - Static AST checker for accessibility rules on JSX elements.
3. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) (Peer Dependency)
   - React specific linting rules for ESLint
4. [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) (Peer Dependency)
   - Support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
5. [babel-eslint](https://github.com/babel/babel-eslint)
   - A wrapper for Babel's parser used for ESLint.
   - We decided to include this since [Airbnb Style Guide uses Babel](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-).

### ESlint, Prettier Integration

1. [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
   - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
2. [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
   - Turns off all rules that are unnecessary or might conflict with Prettier.

### Created Configuration Files

Once files are created, you may edit to your liking.

### eslintrc(.js/.json)

- [more info](https://eslint.org/docs/user-guide/configuring)

```
{
"extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "max-len": [
      "warn",
      {
        "code": (SET BY USER),
        "tabWidth": 2,
        "comments": (SET BY USER),
        "ignoreComments": false,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ]
  }
}
```

### prettierrc(.js/.json)

- [more Info](https://prettier.io/docs/en/configuration.html)

```
{
"printWidth": (SET BY USER),
  "singleQuote": true,
  "trailingComma": (SET BY USER)
}
```

---

This script was inspired by Jeffrey Zhen's [tutorial](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a).