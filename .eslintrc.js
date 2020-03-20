module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["tsc", "jest"],
  root: true,
  extends: "@react-native-community",
  rules: {
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
    "tsc/config": [
      1,
      {
        configFile: "tsconfig.json"
      }
    ],
    "comma-dangle": 0,
    "react/prop-types": 1,
    "prettier/prettier": 1,
    "@typescript-eslint/no-unused-vars": 1
  },
  env: {
    "jest/globals": true
  }
};
