import { Dimensions, PixelRatio } from 'react-native';



const utils = {
  size: Dimensions.get('window'),

  pixelRatio: PixelRatio.get(),

};

export default utils;