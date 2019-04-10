import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import TimerMachine from 'react-timer-machine';
import PropTypes from 'prop-types';

momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 100,
    fontFamily: 'League Gothic',
    fontWeight: 'bold',
    color: 'powderblue',
    alignSelf: 'center',
  },
});

const Countdown = props => {
  const { count, isPlay, increaseSerie } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        <TimerMachine
          timeStart={count * 1000} // empieza a los 20 segundos
          paused={!isPlay}
          started
          countdown
          interval={1000}
          formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
          onComplete={() => {
            increaseSerie();
          }}
        />
      </Text>
    </View>
  );
};

Countdown.propTypes = {
  count: PropTypes.number.isRequired,
  isPlay: PropTypes.bool.isRequired,
  increaseSerie: PropTypes.func.isRequired,
};

Countdown.defaultProps = {};

export default Countdown;
