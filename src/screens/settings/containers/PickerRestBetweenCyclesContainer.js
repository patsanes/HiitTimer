import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { HPicker } from '../components';

class PickerRestBetweenCyclesContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateRestBetween, restBetween } = session;
    const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
    return (
      <HPicker
        placeholder="Rest between cycles"
        selectedValue={restBetween.toString()}
        onValueChange={updateRestBetween}
        items={items}
      />
    );
  }
}

PickerRestBetweenCyclesContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerRestBetweenCyclesContainer));
