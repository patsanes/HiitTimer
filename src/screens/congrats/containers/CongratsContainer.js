import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Congrats } from '../components';

const CongratsContainer = props => {
  const { session, onPress } = props;
  const { training, rest, cycle, serie, endTime } = session;
  return (
    <Congrats
      training={training}
      rest={rest}
      cycle={cycle}
      serie={serie}
      endTime={endTime}
      onPress={onPress}
    />
  );
};

CongratsContainer.propTypes = {
  session: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default inject('session')(observer(CongratsContainer));
