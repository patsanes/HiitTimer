import { createAppContainer, createStackNavigator } from 'react-navigation';

import { ConfigScreen, MainScreen } from '../screens';

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
    },
    ConfigScreen: {
      screen: ConfigScreen,
    },
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);
