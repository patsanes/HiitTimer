import React from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import {
  CountdownContainer,
  LapCycleContainer,
  LapSerieContainer,
  TimeElapsedContainer,
} from '../containers';

momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
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

const Timer = () => {
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
        <TimeElapsedContainer />
      </View>
    </View>
  );
};

export default Timer;
