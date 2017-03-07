import {
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

export const responsiveHeight = (h) => {
  return height*(h/100);
}

export const responsiveWidth = (w) => {
  return width*(w/100);
}

export const responsiveFontSize = (f) => {
  return height*(f/100);
}
