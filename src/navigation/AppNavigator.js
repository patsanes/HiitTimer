import { createAppContainer, createStackNavigator } from 'react-navigation';

import { ConfigScreen, MainScreen } from '../screens';

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      header: null,
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
    initialRouteName: 'MainScreen',
    headerMode: 'float',
  },
);
export default createAppContainer(AppNavigator);
