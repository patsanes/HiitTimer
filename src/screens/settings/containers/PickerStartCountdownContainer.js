import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerStartCountdownContainer = props => {
  const { session } = props;
  const { updateStartCountdown, startCountdown } = session;
  const items = Array.from({ length: 10 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconStartCoundownLabel}
      placeholder={I18N.startCoundownLabel}
      selectedValue={startCountdown.toString()}
      onValueChange={updateStartCountdown}
      items={items}
    />
  );
};

PickerStartCountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerStartCountdownContainer));
