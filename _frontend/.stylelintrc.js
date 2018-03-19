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
    "max-nesting-depth": 4,
    "order/properties-alphabetical-order": null,
    "selector-no-qualifying-type": null
  },
};
