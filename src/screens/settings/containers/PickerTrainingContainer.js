import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerTrainingContainer = props => {
  const { session } = props;
  const { updateTraining, training } = session;
  const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconCountdownLabel}
      placeholder={I18N.countdownLabel}
      selectedValue={training.toString()}
      onValueChange={updateTraining}
      items={items}
    />
  );
};

PickerTrainingContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerTrainingContainer));
