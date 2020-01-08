import React from 'react';
import { render } from 'react-native-testing-library';

import Icons from './index';

describe('Icons', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Icons name="chevron" size={30} color="white" />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly using default color', () => {
    const { toJSON } = render(<Icons name="chevron" size={30} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly using default size', () => {
    const { toJSON } = render(<Icons name="chevron" color="white" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
