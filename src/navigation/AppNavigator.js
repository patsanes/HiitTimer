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
      // headerMode: 'float',
      headerBackTitleVisible: true,

      navigationOptions: () => ({
        title: `SETTINGS`,

        // headerStyle: '',
      }),
    },
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'float',
  },
);
export default createAppContainer(AppNavigator);
