import React from 'react';
import { Provider } from 'mobx-react';

import makeInspectable from 'mobx-devtools-mst';
import { connectToDevTools } from 'mobx-devtools/lib/mobxDevtoolsBackend';
import { initialState, SessionStore } from './src/stores/SessionStore';
import AppNavigator from './src/navigation/AppNavigator';

// https://github.com/mobxjs/mobx-devtools/issues/16

// 1. Connect to devtools (what ever mobx-devtools standalone app tells you to put in)
connectToDevTools({ host: 'localhost', port: '8098' });

const session = SessionStore.create(initialState);
// 2b. If you don't use RNN you need a way to know when the devtools are connected, so
// for the time being, use a timeout or other event handler you know works.
setTimeout(() => {
  makeInspectable(session);
}, 1000);

export default class App extends React.Component {
  render() {
    return (
      <Provider session={session}>
        <AppNavigator />
      </Provider>
    );
  }
}
