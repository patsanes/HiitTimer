import React from "react";
import { Provider } from "mobx-react";
import { observable, reaction } from "mobx";

import MainScreen from "./src/MainScreen";
import { initialState, SessionStore } from "./src/stores/SessionStore";

const session = SessionStore.create(initialState);
export default class App extends React.Component {
  render() {
    return (
      <Provider session={session}>
        <MainScreen />
      </Provider>
    );
  }
}
