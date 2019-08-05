import React from 'react';
import { render } from 'react-native-testing-library';
import { Provider } from 'mobx-react';

import { initialState, SessionStore } from 'HiitTimer/src/stores/SessionStore';
import CountdownScreen from './CountdownScreen';

// jest.mock('react-native-sound', () => ({
//   setCategory: () => undefined,
// }));

const navigation = {
  goBack: () => undefined,
};

const session = SessionStore.create(initialState);
describe('CountdownScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Provider session={session}>
        <CountdownScreen navigation={navigation} />
      </Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
