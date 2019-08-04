import { StackActions, NavigationActions } from 'react-navigation';

import { MAIN_SCREEN, CONGRATS_SCREEN, CONFIG_SCREEN, COUNTDOWN_SCREEN } from './constants';

export const goToSettings = () =>
  StackActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: MAIN_SCREEN }),
      NavigationActions.navigate({ routeName: CONFIG_SCREEN }),
    ],
  });

// https://reactnavigation.org/docs/en/stack-actions.html#push
export const goToCountdown = () =>
  StackActions.push({
    routeName: COUNTDOWN_SCREEN,
  });

export const goToHome = () =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: MAIN_SCREEN })],
  });

export const goToCongrats = () =>
  StackActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: MAIN_SCREEN }),
      NavigationActions.navigate({ routeName: CONGRATS_SCREEN }),
    ],
  });
