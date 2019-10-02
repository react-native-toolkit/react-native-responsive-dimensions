# react-native-responsive-dimensions

Responsive height, width and responsive fontSize for react native components that automatically adjust themselves based on the screen size of the device. The dimensions can be used for any components like View, Image, Text etc.

##### Responsive Font Size uses only the width of the device and auto adjusts to the screen. It will not depend on Height due to different aspect ratio across many devices.

Installation

```sh
#npm
npm install --save react-native-responsive-dimensions

#yarn
yarn add react-native-responsive-dimensions
```

The below snippet will create styles with a container of dynamic height, width and a sample text with dynamic font-size relative to the screen size of the device the app is run.

```js
import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: responsiveHeight(50), // 50% of screen height
    width: responsiveWidth(50), // 50% of screen width
    alignItems: "center"
  },
  sampleText: {
    fontSize: responsiveFontSize(2) // 2% of total screen size
  }
});
```

This will create a container(view/image) with height that is exactly 50% of the device's screen-height and width exactly 50% of the device's screen-height and a font with fontSize that occupies exactly 2% of the screen size.

## Major Update - Responsive Hooks are here!!

One of the most important feedback received from the community is that handling responsive height and width when the device orientation changes is a huge pain point. Also, we have a new lineup of foldable devices whose dimensions are going to by dynamic.

To address this, taking advantage of the new React Hooks API, responsive dimensions now include three custom hooks `useResponsiveHeight`, `useResponsiveWidth`, `useResponsiveFontSize` which will automatically re-calculate the responsive height, width and font size every time the device orientation or the display size changes.

An example project has been included in RNResponsiveDimensionsExample directory which will explain how to use the new custom hooks and how they will differ from the usual responsive functions.

## License

MIT
