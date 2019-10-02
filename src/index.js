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

import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const responsiveHeight = h => {
  const { height } = Dimensions.get("window");
  return height * (h / 100);
};

export const responsiveWidth = w => {
  const { width } = Dimensions.get("window");
  return width * (w / 100);
};

export const responsiveFontSize = f => {
  const { width } = Dimensions.get("window");
  const tempHeight = (16 / 9) * width;
  return Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(width, 2)) * (f / 100);
};

export const useResponsiveHeight = h => {
  const [calculatedHeight, setCalculatedHeight] = useState(responsiveHeight(h));

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedHeight(responsiveHeight(h));
    }

    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  });

  return calculatedHeight;
};

export const useResponsiveWidth = w => {
  const [calculatedWidth, setCalculatedWidth] = useState(responsiveWidth(w));

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedWidth(responsiveWidth(w));
    }

    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  });

  return calculatedWidth;
};

export const useResponsiveFontSize = f => {
  const [calculatedFontSize, setCalculatedFontSize] = useState(
    responsiveFontSize(f)
  );

  useEffect(() => {
    function handleDimensionChange() {
      setCalculatedFontSize(responsiveFontSize(f));
    }

    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  });

  return calculatedFontSize;
};
