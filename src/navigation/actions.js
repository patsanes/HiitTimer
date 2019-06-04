import { StackActions, NavigationActions } from 'react-navigation';

export const goToSettings = () =>
  StackActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'MainScreen' }),
      NavigationActions.navigate({ routeName: 'ConfigScreen' }),
    ],
  });

// https://reactnavigation.org/docs/en/stack-actions.html#push
export const goToCountdown = () =>
  StackActions.push({
    routeName: 'CountdownScreen',
    // actions: [
    // NavigationActions.navigate({ routeName: 'MainScreen' }),
    // NavigationActions.navigate({ routeName: 'CountdownScreen' }),
    // ],
  });

export const goToHome = () =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainScreen' })],
  });
