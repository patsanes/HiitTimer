import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerRestContainer = props => {
  const { session } = props;
  const { updateRest, rest } = session;
  const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconRestLabel}
      placeholder={I18N.restLabel}
      selectedValue={rest.toString()}
      onValueChange={updateRest}
      items={items}
    />
  );
};

PickerRestContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerRestContainer));
