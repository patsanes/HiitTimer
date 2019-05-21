import { StackActions, NavigationActions } from 'react-navigation';

export const goToSettings = () =>
  StackActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'MainScreen' }),
      NavigationActions.navigate({ routeName: 'ConfigScreen' }),
    ],
  });

export const goToCountdown = () =>
  StackActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'MainScreen' }),
      NavigationActions.navigate({ routeName: 'CountdownScreen' }),
    ],
  });

export const goToHome = () =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainScreen' })],
  });
