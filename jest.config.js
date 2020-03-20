module.exports = {
  preset: "@testing-library/react-native",
  setupFilesAfterEnv: ["./__mocks__/Dimensions.ts"],
  verbose: true,
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)"
  ]
};
