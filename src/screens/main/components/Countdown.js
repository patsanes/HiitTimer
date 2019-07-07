import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Sound from 'react-native-sound';
import { ProgressContainer, TimerMachineContainer } from '../containers';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 100,
    position: 'absolute',
    fontFamily: 'League Gothic',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});

const Countdown = props => {
  const { count, isRest, fill, fillComplete, _onFinish } = props;
  const backgroundColors = isRest ? '#38ef7d' : '#6DD5FA';
  const backgroundColorsOff = isRest ? '#1D4350' : '#1D4350';

  Sound.setCategory('Playback');

  return (
    <React.Fragment>
      <Text style={styles.titleText}>
        <TimerMachineContainer count={count} _onFinish={_onFinish} />
      </Text>
      <ProgressContainer
        fill={fill}
        fillComplete={fillComplete}
        tintColor={backgroundColors}
        backgroundColor={backgroundColorsOff}
      />
    </React.Fragment>
  );
};

Countdown.propTypes = {
  count: PropTypes.number.isRequired,
  isRest: PropTypes.bool.isRequired,
  fill: PropTypes.number.isRequired,
  fillComplete: PropTypes.number.isRequired,
  _onFinish: PropTypes.func.isRequired,
};

Countdown.defaultProps = {};

export default Countdown;
