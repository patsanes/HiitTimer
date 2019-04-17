import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { HPicker } from '../components';

class PickerTrainingContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateTraining, training } = session;
    const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
    return (
      <HPicker
        placeholder="CountDown"
        selectedValue={training.toString()}
        onValueChange={updateTraining}
        items={items}
      />
    );
  }
}

PickerTrainingContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerTrainingContainer));
