import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
  PickerTrainingContainer,
  PickerRestContainer,
  PickerCycleContainer,
  PickerSerieContainer,
  PickerRestBetweenCyclesContainer,
  PickerStartCountdownContainer,
  CompleteWorkoutContainer,
} from '../containers';

const styles = StyleSheet.create({
  container: {},
  top: {
    justifyContent: 'space-between',
  },
  middle: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

const SettingsSpace = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <PickerTrainingContainer />
        <PickerRestContainer />
        <PickerCycleContainer />
        <PickerSerieContainer />
        <PickerRestBetweenCyclesContainer />
        <PickerStartCountdownContainer />
      </View>
      <View style={styles.middle}>
        <CompleteWorkoutContainer />
      </View>
    </View>
  );
};
export default SettingsSpace;
