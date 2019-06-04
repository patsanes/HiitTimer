import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import React from 'react';

import { ConfigScreen, MainScreen, CountdownScreen } from '../screens';
import { ButtonConfigContainer } from '../containers';

const { height } = Dimensions.get('window');

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        title: `HIIT`,
        headerStyle: {
          backgroundColor: '#d9a7c7',
          height: height * 0.1,
          borderWidth: 1,
          borderColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 50,
          fontFamily: 'Permanent Marker',
          color: 'powderblue',
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
          backgroundColor: '#d9a7c7',
          fontFamily: 'Permanent Marker',
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
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'float',
  },
);
export default createAppContainer(AppNavigator);
