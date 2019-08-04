import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import React from 'react';

import { fontSizes, fontFamilies, colors, space } from 'HiitTimer/src/utils/theme';
import { ConfigScreen, MainScreen, CountdownScreen, CongratsScreen } from 'HiitTimer/src/screens';
import { ButtonConfigContainer } from 'HiitTimer/src/containers';
import { MAIN_SCREEN, COUNTDOWN_SCREEN, CONGRATS_SCREEN, CONFIG_SCREEN } from './constants';

const { height } = Dimensions.get('window');

const AppNavigator = createStackNavigator(
  {
    [MAIN_SCREEN]: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        title: `HiiTimer`,
        headerStyle: {
          backgroundColor: colors.primaryLight,
          height: height * 0.1,
        },
        headerTitleStyle: {
          fontSize: fontSizes.medium,
          fontFamily: fontFamilies.montserrat,
          color: colors.secondaryDark,
          paddingHorizontal: space.medium,
        },
        headerBackgroundTransitionPreset: 'translate',
        headerRight: <ButtonConfigContainer dispatch={navigation.dispatch} />,
      }),
    },
    [CONFIG_SCREEN]: {
      screen: ConfigScreen,
      headerBackTitleVisible: false,
      navigationOptions: () => ({
        title: `SETTINGS`,
        headerStyle: {
          height: height * 0.1,
          borderWidth: 1,
          borderColor: 'red',
        },
        headerTitleStyle: {
          fontSize: fontSizes.xSmall,
          color: colors.secondaryDark,
          paddingHorizontal: space.medium,
        },
        headerBackgroundTransitionPreset: 'translate',
      }),
    },
    [COUNTDOWN_SCREEN]: {
      screen: CountdownScreen,
      headerMode: 'none',
      navigationOptions: () => ({
        headerVisible: false,
        header: null,
      }),
    },
    [CONGRATS_SCREEN]: {
      screen: CongratsScreen,
      headerMode: 'float',
      navigationOptions: () => ({
        title: `Well done!`,
        headerStyle: {
          backgroundColor: colors.primaryLight,
          height: height * 0.1,
        },
        headerTitleStyle: {
          fontSize: fontSizes.xlarge,
          fontFamily: fontFamilies.montserrat,
          color: colors.secondaryDark,
          paddingHorizontal: space.medium,
        },
        headerBackgroundTransitionPreset: 'translate',
      }),
    },
  },
  {
    initialRouteName: MAIN_SCREEN,
    headerMode: 'float',
  },
);
export default createAppContainer(AppNavigator);
