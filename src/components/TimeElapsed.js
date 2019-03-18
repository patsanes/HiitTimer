import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import TimerMachine from 'react-timer-machine';
import PropTypes from 'prop-types';

momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
  baseText: {
    fontSize: 40,
    alignSelf: 'center',
    color: 'skyblue',
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'powderblue',
    alignSelf: 'center',
  },
});

const TimeElapsed = props => {
  // const { startTime } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <TimerMachine
          timeStart={1000} // empieza a los 20 segundos
          timeEnd={20 * 1000} // termina
          paused={false}
          started
          countdown={false}
          interval={1000}
          formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
        />{' '}
      </Text>
    </View>
  );
};

TimeElapsed.propTypes = {
  // startTime: PropTypes.string.isRequired,
  // countdown: PropTypes.string.isRequired
};

TimeElapsed.defaultProps = {};

export default TimeElapsed;
