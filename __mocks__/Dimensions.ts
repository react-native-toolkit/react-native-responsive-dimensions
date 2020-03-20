jest.mock("react-native/Libraries/Utilities/Dimensions", () => {
  const Dimensions = require.requireActual(
    "react-native/Libraries/Utilities/Dimensions"
  );
  Dimensions.get = jest.fn().mockReturnValue({ width: 100, height: 100 });
  return Dimensions;
});
