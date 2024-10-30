/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    // QUESTION: Why does this line fail
    "@repo/config-eslint/next.js",
    // QUESTION: While this line works
    // "@repo/eslint-config/next.js"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
