import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import TimerMachine from 'react-timer-machine';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 100,
    position: 'absolute',
    fontFamily: 'League Gothic',
    fontWeight: 'bold',
    color: 'powderblue',
    alignSelf: 'center',
  },
  container: {
    position: 'absolute',
    alignSelf: 'center',
    height: 20,
    justifyContent: 'center',
  },
  secondContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: 20,
    justifyContent: 'center',
  },
});

const Countdown = props => {
  const {
    count,
    isPlay,
    isStop,
    increaseSerie,
    currentTime,
    resetTime,
    inProgress,
    fill,
    fillComplete,
    _onFinish,
  } = props;

  return (
    <React.Fragment>
      <Text style={styles.titleText}>
        {!inProgress ? (
          <TimerMachine
            timeStart={0}
            interval={1000}
            formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
          />
        ) : (
          <TimerMachine
            timeStart={count * 1000} // empieza a los 20 segundos
            paused={!isPlay}
            started={!isStop}
            countdown
            interval={1000}
            formatTimer={(time, ms) => moment.duration(ms, 'milliseconds').format('h, m, s')}
            onStop={() => {
              resetTime();
            }}
            onTick={() => {
              if (currentTime <= -1) {
                resetTime(false);
              } else {
                resetTime(true);
              }
            }}
            onComplete={() => {
              increaseSerie();
              //go to complete workout
              _onFinish();
            }}
          />
        )}
      </Text>
      {/* Complete workout */}
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={350}
          width={12}
          fill={fillComplete}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          lineCap="round"
          rotation={0}
        />
      </View>
      {/* Countdown workout */}
      <View style={styles.secondContainer}>
        <AnimatedCircularProgress
          size={320}
          width={15}
          fill={fill}
          tintColor="#1565C0"
          backgroundColor="#3d5875"
          lineCap="round"
          rotation={0}
        />
      </View>
    </React.Fragment>
  );
};

Countdown.propTypes = {
  count: PropTypes.number.isRequired,
  isPlay: PropTypes.bool.isRequired,
  isStop: PropTypes.bool.isRequired,
  increaseSerie: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  resetTime: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  fill: PropTypes.number.isRequired,
  fillComplete: PropTypes.number.isRequired,
  _onFinish: PropTypes.func.isRequired,
};

Countdown.defaultProps = {};

export default Countdown;
