import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { HPicker } from '../components';

class PickerSerieContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateSerie, serie } = session;
    const items = Array.from({ length: 10 }, (v, i) => (i + 1).toString());
    return (
      <HPicker
        placeholder="Serie"
        selectedValue={serie.toString()}
        onValueChange={updateSerie}
        items={items}
      />
    );
  }
}

PickerSerieContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerSerieContainer));
