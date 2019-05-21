import { createAppContainer, createStackNavigator } from 'react-navigation';

import { ConfigScreen, MainScreen, CountdownScreen } from '../screens';

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
