import { Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('window');

// https://css-tricks.com/what-do-you-name-color-variables/
export const colors = {
  //   primary: 'black',
  primaryLight: 'white',
  primaryDark: '#ECE9E6',

  //   secondaryLight: 'black',
  secondary: 'grey',
  secondaryDark: '#373B44',

  //   neutralDarker: 'black',
  //   neutrayDark: 'black',
  neutral: 'black',
  //   neutralLight: 'black',
  //   neutralLighter: 'black',
  //   neutralLightest: 'black',
  countdownYellow: '#FDC830',
  countdownOrange: '#F37335',
  restGreen: '#38ef7d',
  restBlue: '#6DD5FA',
  progressPink: '#BB377D',
};

// https://www.w3schools.com/cssref/pr_font_font-size.asp
export const fontSizes = {
  xxxxLarge: 250,
  xxxLarge: 100,
  xxLarge: 70,
  xlarge: 40,
  large: 35,
  medium: 30,
  small: 25,
  xSmall: 20,
  xxSmall: 16,
};

// fontFamily:
export const fontFamilies = {
  leagueGothic: 'League Gothic',
  permanent: 'Permanent Marker',
  montserrat: 'Montserrat-Light',
};

export const space = {
  jumbo: 120,

  xxLarge: 30,
  //   xLarge: 20,
  large: 15,
  medium: 10,
  small: 8,
  xSmall: 5,
  xxSmall: 2,
};
