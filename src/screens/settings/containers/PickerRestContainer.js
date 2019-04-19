import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { HPicker } from '../components';

class PickerRestContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateRest, rest } = session;
    const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
    return (
      <HPicker
        placeholder="Rest"
        selectedValue={rest.toString()}
        onValueChange={updateRest}
        items={items}
      />
    );
  }
}

PickerRestContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerRestContainer));
