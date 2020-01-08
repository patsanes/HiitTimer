import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerSerieContainer = props => {
  const { session } = props;
  const { updateSerie, serie } = session;
  const items = Array.from({ length: 10 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconSerieLabel}
      placeholder={I18N.serieLabel}
      selectedValue={serie.toString()}
      onValueChange={updateSerie}
      items={items}
    />
  );
};

PickerSerieContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PickerSerieContainer));
