import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
// import momentDurationFormatSetup from 'moment-duration-format';
import TimerMachine from 'react-timer-machine';
import PropTypes from 'prop-types';
import { fontSizes, fontFamilies, colors } from '../../../utils/theme';

// momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
  baseText: {
    fontSize: fontSizes.xlarge,
    fontFamily: fontFamilies.leagueGothic,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.secondaryDark,
  },
});

const TimeElapsed = props => {
  const { isPlay, isStop, increaseTime, timePased } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <TimerMachine
          timeStart={timePased * 1000} // empieza a los 20 segundos
          paused={!isPlay}
          started={!isStop}
          countdown={false}
          interval={1000}
          formatTimer={time => moment(time).format('HH:mm:ss')}
          onTick={() => {
            increaseTime();
          }}
        />{' '}
      </Text>
    </View>
  );
};

TimeElapsed.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  isStop: PropTypes.bool.isRequired,
  increaseTime: PropTypes.func.isRequired,
  timePased: PropTypes.number.isRequired,
};

TimeElapsed.defaultProps = {};

export default TimeElapsed;
