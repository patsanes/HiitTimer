import React from 'react';
import { render } from 'react-native-testing-library';
import { Provider } from 'mobx-react';

import { initialState, SessionStore } from 'HiitTimer/src/stores/SessionStore';
import CongratsScreen from './CongratsScreen';

const navigation = {};

const session = SessionStore.create(initialState);
describe('CongratsScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Provider session={session}>
        <CongratsScreen navigation={navigation} />
      </Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
