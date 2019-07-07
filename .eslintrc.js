module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier/@typescript-eslint"],
  plugins: ["@typescript-eslint/recommended", "prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};
