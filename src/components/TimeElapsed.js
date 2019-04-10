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
    fontFamily: 'League Gothic',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'skyblue',
  },
});

const TimeElapsed = props => {
  const { isPlay } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <TimerMachine
          timeStart={1000} // empieza a los 20 segundos
          paused={!isPlay}
          started
          countdown={false}
          interval={1000}
          formatTimer={time => moment(time).format('HH:mm:ss')}
        />{' '}
      </Text>
    </View>
  );
};

TimeElapsed.propTypes = {
  isPlay: PropTypes.bool.isRequired,
};

TimeElapsed.defaultProps = {};

export default TimeElapsed;
