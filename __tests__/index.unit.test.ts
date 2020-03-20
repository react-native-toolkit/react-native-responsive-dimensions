import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "../lib/index";

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

describe("Testing hooks", () => {});
