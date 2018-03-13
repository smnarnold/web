module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
  ],
  "rules": {
    "color-named": ["never", {
      "ignore": ["inside-function"]
    }],
    "at-rule-no-unknown": null,
    "max-nesting-depth": 3,
    "order/properties-alphabetical-order": null,
  },
};
