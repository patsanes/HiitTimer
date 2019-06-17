import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import React from 'react';

import { ConfigScreen, MainScreen, CountdownScreen, CongratsScreen } from '../screens';
import { ButtonConfigContainer } from '../containers';

const { height } = Dimensions.get('window');

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        title: `HiiTimer`,
        headerStyle: {
          backgroundColor: '#373B44',
          height: height * 0.1,
        },
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: 'Montserrat-Light',
          color: 'white',
          paddingHorizontal: 10,
        },
        headerBackgroundTransitionPreset: 'translate',
        headerRight: <ButtonConfigContainer dispatch={navigation.dispatch} />,
      }),
    },
    ConfigScreen: {
      screen: ConfigScreen,
      headerBackTitleVisible: false,
      navigationOptions: () => ({
        title: `SETTINGS`,
        headerStyle: {
          backgroundColor: '#373B44',
          fontFamily: 'Montserrat-Light',
          height: height * 0.1,
          borderWidth: 1,
          borderColor: 'red',
        },
        headerBackgroundTransitionPreset: 'translate',
        headerTintColor: 'white',
      }),
    },
    CountdownScreen: {
      screen: CountdownScreen,
      headerMode: 'none',
      navigationOptions: () => ({
        headerVisible: false,
        header: null,
      }),
    },
    CongratsScreen: {
      screen: CongratsScreen,
      headerMode: 'float',
      navigationOptions: () => ({
        title: `Well done!`,
        headerStyle: {
          backgroundColor: '#373B44',
          height: height * 0.1,
        },
        headerTitleStyle: {
          fontSize: 45,
          fontFamily: 'Montserrat-Light',
          color: 'white',
          paddingHorizontal: 10,
        },
        headerBackgroundTransitionPreset: 'translate',
        headerTintColor: 'white',
      }),
    },
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'float',
  },
);
export default createAppContainer(AppNavigator);
