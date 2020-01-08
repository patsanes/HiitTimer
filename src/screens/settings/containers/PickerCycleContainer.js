import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';

import { HPicker } from '../components';

class PickerCycleContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateCycle, cycle } = session;
    const items = Array.from({ length: 20 }, (v, i) => (i + 1).toString());
    return (
      <HPicker
        iconName={I18N.iconCycleLabel}
        placeholder={I18N.cycleLabel}
        selectedValue={cycle.toString()}
        onValueChange={updateCycle}
        items={items}
      />
    );
  }
}

PickerCycleContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerCycleContainer));
