import React from 'react';
import { Provider } from 'mobx-react';

import { initialState, SessionStore } from './src/stores/SessionStore';
import AppNavigator from './src/navigation/AppNavigator';

const session = SessionStore.create(initialState);
export default class App extends React.Component {
  render() {
    return (
      <Provider session={session}>
        <AppNavigator />
      </Provider>
    );
  }
}
