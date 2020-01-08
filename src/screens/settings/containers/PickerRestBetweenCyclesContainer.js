import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

class PickerRestBetweenCyclesContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateRestBetween, restBetween } = session;
    const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
    return (
      <HPicker
        iconName={I18N.iconRestBetweenLabel}
        placeholder={I18N.restBetweenCyclesLabel}
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
