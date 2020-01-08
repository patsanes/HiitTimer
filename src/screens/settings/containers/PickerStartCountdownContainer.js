import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { HPicker } from '../components';

class PickerStartCountdownContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateStartCountdown, startCountdown } = session;
    const items = Array.from({ length: 10 }, (v, i) => (i + 1).toString());
    return (
      <HPicker
        iconName="stopwatch"
        placeholder="Start countdown"
        selectedValue={startCountdown.toString()}
        onValueChange={updateStartCountdown}
        items={items}
      />
    );
  }
}

PickerStartCountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerStartCountdownContainer));
