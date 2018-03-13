module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "$": true,
    "initClasses": true
  },
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  // ref : http://eslint.org/docs/rules/
  // "off" or 0 - turn the rule off
  // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
  "rules": {
    // Possible Errors (30)
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 1,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-prototype-builtins": 0,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    // Best Pratices
    "no-case-declarations": 2,
    "no-empty-pattern": 2,
    "no-fallthrough": 2,
    "no-octal": 2,
    "no-redeclare": 2,
    "no-self-assign": 2,
    "no-unused-labels": 2,
    // Variables
    "no-delete-var": 2,
    "no-undef": 2,
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    // Stylistic Issues
    "no-mixed-spaces-and-tabs": [2, false],
    // ECMAScript 6
    "constructor-super": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "require-yield": 2,
    // Custom
    "eqeqeq": ["error", "always"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "no-alert": 1,
    "no-whitespace-before-property": 2,
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
  }
};
