/**
 * MIT License
 *
 * Copyright (c) 2017-present DaniAkash
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { useState, useEffect, useRef } from "react";
import { Dimensions, ScaledSize } from "react-native";

const useDimensionsListener = () => {
  const [screenDimension, setScreenDimension] = useState(
    Dimensions.get("screen")
  );
  const [windowDimension, setWindowDimension] = useState(
    Dimensions.get("window")
  );

  useEffect(() => {
    function handleDimensionChange({
      window,
      screen
    }: {
      window: ScaledSize;
      screen: ScaledSize;
    }) {
      setWindowDimension(window);
      setScreenDimension(screen);
    }

    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  }, []);

  return {
    screen: screenDimension,
    window: windowDimension
  };
};

type EffectParams = {
  screen: ScaledSize;
  window: ScaledSize;
};

type EffectCallback =
  | ((opts: EffectParams) => () => any)
  | ((opts: EffectParams) => undefined)
  | ((opts: EffectParams) => void);

const percentageCalculation = (max: number, val: number) => max * (val / 100);

const fontCalculation = (height: number, width: number, val: number) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    ),
    val
  );
};

export const useDimensionsChange = (effect: EffectCallback) => {
  const hasMountRef = useRef(false);
  const dimensions = useDimensionsListener();

  useEffect(() => {
    if (hasMountRef.current) {
      const destroy = effect(dimensions);
      let cleanUp: any = () => null;
      if (typeof destroy === "function") {
        cleanUp = destroy;
      }
      return () => cleanUp();
    } else {
      hasMountRef.current = true;
    }
  }, [dimensions, hasMountRef]);
};

export const responsiveHeight = (h: number) => {
  const { height } = Dimensions.get("window");
  return percentageCalculation(height, h);
};

export const responsiveWidth = (w: number) => {
  const { width } = Dimensions.get("window");
  return percentageCalculation(width, w);
};

export const responsiveFontSize = (f: number) => {
  const { height, width } = Dimensions.get("window");
  return fontCalculation(height, width, f);
};

export const responsiveScreenHeight = (h: number) => {
  const { height } = Dimensions.get("screen");
  return percentageCalculation(height, h);
};

export const responsiveScreenWidth = (w: number) => {
  const { width } = Dimensions.get("screen");
  return percentageCalculation(width, w);
};

export const responsiveScreenFontSize = (f: number) => {
  const { height, width } = Dimensions.get("screen");
  return fontCalculation(height, width, f);
};

export const useResponsiveHeight = (h: number) => {
  const { height } = useDimensionsListener().window;
  return percentageCalculation(height, h);
};

export const useResponsiveWidth = (w: number) => {
  const { width } = useDimensionsListener().window;
  return percentageCalculation(width, w);
};

export const useResponsiveFontSize = (f: number) => {
  const { height, width } = useDimensionsListener().window;
  return fontCalculation(height, width, f);
};

export const useResponsiveScreenHeight = (h: number) => {
  const { height } = useDimensionsListener().screen;
  return percentageCalculation(height, h);
};

export const useResponsiveScreenWidth = (w: number) => {
  const { width } = useDimensionsListener().screen;
  return percentageCalculation(width, w);
};

export const useResponsiveScreenFontSize = (f: number) => {
  const { height, width } = useDimensionsListener().screen;
  return fontCalculation(height, width, f);
};
