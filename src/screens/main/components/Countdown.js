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
    rest,
    cycle,
    serie,
    isPlay,
    isRest,
    isStop,
    increaseSerie,
    saveTime,
    currentTime,
    resetTime,
    inProgress,
    fill,
    // setInProgress,
  } = props;

  // const totalTime = (count + rest) * cycle * serie;
  // const fillComplete = -[(currentTime / totalTime) * 100];

  // const fill = !isRest ? fillCountdown : fillRest;

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
              // setInProgress();
              resetTime();
            }}
            onTick={() => {
              // saveTime();
              if (currentTime < 0) {
                resetTime(false);
              } else {
                resetTime(true);
              }
            }}
            onComplete={() => {
              increaseSerie();
            }}
          />
        )}
      </Text>
      {/* <View style={styles.container}>
        <AnimatedCircularProgress
          size={350}
          width={15}
          fill={fillComplete}
          tintColor="#00e0ff"
          // onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
          lineCap="round"
          rotation={0}
        />
      </View> */}
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
  rest: PropTypes.number.isRequired,
  cycle: PropTypes.number.isRequired,
  serie: PropTypes.number.isRequired,

  isPlay: PropTypes.bool.isRequired,
  isRest: PropTypes.bool.isRequired,
  isStop: PropTypes.bool.isRequired,
  increaseSerie: PropTypes.func.isRequired,
  saveTime: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  resetTime: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  fill: PropTypes.number.isRequired,

  // setInProgress: PropTypes.func.isRequired,
};

Countdown.defaultProps = {};

export default Countdown;
