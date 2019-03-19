import { Dimensions, PixelRatio } from 'react-native';



const utils = {
  size: Dimensions.get('window'),

  pixelRatio: 1 / PixelRatio.get(),

};

export default utils;