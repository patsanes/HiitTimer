import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import TimerMachine from 'react-timer-machine';
import PropTypes from 'prop-types';
import Lap from './Lap';

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
  container: {
    flex: 3,
    flexDirection: 'column',
  },
  middleTop: {
    flex: 5,
    justifyContent: 'flex-end',
  },
  middleMiddle: {
    flex: 1,
    flexDirection: 'row',
  },
  middleBottom: {
    flex: 4,
  },
});

const Timer = props => {
  const { timePass, countdown } = props;
  return (
    <View style={styles.container}>
      <View style={styles.middleTop}>
        <Text style={styles.titleText}>
          <TimerMachine
            timeStart={20 * 1000} // empieza a los 20 segundos
            timeEnd={1000} // termina
            paused={false}
            started
            countdown
            interval={1000}
            formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
          />
        </Text>
      </View>
      <View style={styles.middleMiddle}>
        <Lap name="Cycles" />
        <Lap name="Series" />
      </View>
      <View style={styles.middleBottom}>
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
    </View>
  );
};

Timer.propTypes = {
  timePass: PropTypes.string.isRequired,
  countdown: PropTypes.string.isRequired,
};

Timer.defaultProps = {};

export default Timer;
