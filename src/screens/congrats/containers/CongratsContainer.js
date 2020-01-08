import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import { Congrats } from '../components';

const CongratsContainer = observer(props => {
  const { session } = useStores();
  const { onPress } = props;
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
});

CongratsContainer.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default CongratsContainer;
