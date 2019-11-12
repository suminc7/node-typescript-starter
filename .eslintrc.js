module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    quotes: ["error", "single"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
  }
};
