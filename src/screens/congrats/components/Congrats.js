import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Congrats = props => {
  const { training, rest, cycle, serie, endTime } = props;
  return (
    <React.Fragment>
      <Text>Well done! </Text>
      <Text>
        You have completed a session of {cycle} cycles with {serie} series in {endTime} time.
      </Text>
      <Text>Detail: </Text>
      <Text>Training time: {training}</Text>
      <Text>Rest time: {rest}</Text>
    </React.Fragment>
  );
};

Congrats.propTypes = {
  training: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  cycle: PropTypes.number.isRequired,
  serie: PropTypes.number.isRequired,
  endTime: PropTypes.object.isRequired,
};
Congrats.defaultProps = {};
export default Congrats;
