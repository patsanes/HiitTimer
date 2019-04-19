import { createAppContainer, createStackNavigator } from 'react-navigation';

import { ConfigScreen, MainScreen } from '../screens';

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      headerMode: 'none',
      navigationOptions: () => ({
        headerVisible: false,
        header: null,
      }),
    },
    ConfigScreen: {
      screen: ConfigScreen,
      headerBackTitleVisible: true,

      navigationOptions: () => ({
        title: `SETTINGS`,
        headerStyle: {
          backgroundColor: '#16222A',
          fontFamily: 'Permanent Marker',
        },
        headerTintColor: 'white',
      }),
    },
  },
  {
    initialRouteName: 'ConfigScreen',
    headerMode: 'float',
  },
);
export default createAppContainer(AppNavigator);
