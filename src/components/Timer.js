import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import CountdownContainer from '../containers/CountdownContainer';
import LapSerieContainer from '../containers/LapSerieContainer';
import LapCycleContainer from '../containers/LapCycleContainer';
import TimeElapsedContainer from '../containers/TimeElapsedContainer';

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
  miaaddleBottom: {
    flex: 4,
  },
  middleBottom: {
    flex: 4,
  },
});

const Timer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.middleTop}>
        <CountdownContainer />
      </View>
      <View style={styles.middleMiddle}>
        <LapSerieContainer />
        <LapCycleContainer />
      </View>
      <View style={styles.middleBottom}>
        {/* <TimeElapsed startTime={startTime} /> */}
        <TimeElapsedContainer />
      </View>
    </View>
  );
};

export default Timer;
