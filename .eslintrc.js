const ERR = 2;
const WARN = 1;
const OFF = 0;

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  rules: {
    // Be grumpy (not angry) about console logs.
    "no-console": WARN,
    // Enable a few non-defaults.
    complexity: WARN,
    "no-empty-function": ERR,
    "no-floating-decimal": WARN,
    "no-unused-vars": WARN,
    "no-return-assign": ERR,
    "no-shadow": ERR,
    "no-throw-literal": WARN,
    "no-var": ERR,
    "prefer-spread": WARN
  },
  plugins: ["react", "react-hooks"]
};
