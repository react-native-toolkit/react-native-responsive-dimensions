import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
  useResponsiveFontSize,
  useResponsiveScreenHeight,
  useResponsiveScreenWidth,
  useResponsiveScreenFontSize
} from "../src/index";
import { render, cleanup } from "@testing-library/react-native";

afterEach(cleanup);

describe("Testing common utils", () => {
  it("responsiveHeight", () => {
    const height = responsiveHeight(20);
    expect(height).toBe(20);
  });

  it("responsiveWidth", () => {
    const width = responsiveWidth(20);
    expect(width).toBe(20);
  });

  it("responsiveFontSize", () => {
    const fontSize = responsiveFontSize(2);
    expect(fontSize).toBe(4.0794577223746264);
  });

  it("responsiveScreenHeight", () => {
    const height = responsiveScreenHeight(20);
    expect(height).toBe(20);
  });

  it("responsiveScreenWidth", () => {
    const width = responsiveScreenWidth(20);
    expect(width).toBe(20);
  });

  it("responsiveScreenFontSize", () => {
    const fontSize = responsiveScreenFontSize(2);
    expect(fontSize).toBe(4.0794577223746264);
  });
});

export interface IDimensionsData {
  window: {
    height: number;
    width: number;
    fontSize: number;
  };
  screen: {
    height: number;
    width: number;
    fontSize: number;
  };
}

const useDimensionHooks = (): IDimensionsData => {
  return {
    window: {
      height: useResponsiveHeight(20),
      width: useResponsiveWidth(20),
      fontSize: useResponsiveFontSize(2)
    },
    screen: {
      height: useResponsiveScreenHeight(20),
      width: useResponsiveScreenWidth(20),
      fontSize: useResponsiveScreenFontSize(2)
    }
  };
};

const HookRenderer = ({
  children
}: {
  children: (arg: IDimensionsData) => any;
}) => {
  const dimensionsData = useDimensionHooks();
  return children(dimensionsData);
};

const setUpDimensionComponent = () => {
  const dimensions = {} as IDimensionsData;

  render(
    <HookRenderer
      children={(dimensionsData: IDimensionsData) => {
        Object.assign(dimensions, dimensionsData);
        return null;
      }}
    />
  );

  return dimensions;
};

describe("Testing Hooks", () => {
  it("responsiveHooks", () => {
    const data = setUpDimensionComponent();
    expect(data).toStrictEqual({
      window: { height: 20, width: 20, fontSize: 4.0794577223746264 },
      screen: { height: 20, width: 20, fontSize: 4.0794577223746264 }
    });
  });
});
