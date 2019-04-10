import { StackActions, NavigationActions } from 'react-navigation';

// export const goBack = () => NavigationActions.back();
export const goToSettings = () =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'ConfigScreen' })],
  });

export const goToHome = () =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainScreen' })],
  });
