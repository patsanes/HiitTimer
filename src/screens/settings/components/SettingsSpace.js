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
  middle: {
    borderColor: 'red',
    borderWidth: 5,
    justifyContent: 'space-between',
  },
  completeWorkout: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderColor: 'green',
    borderWidth: 2,
  },
  container: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  item: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
});

const SettingsSpace = () => {
  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <PickerTrainingContainer style={styles.item} />
        <PickerRestContainer />
        <PickerCycleContainer />
        <PickerSerieContainer />
        <PickerRestBetweenCyclesContainer />
        <PickerStartCountdownContainer />
      </View>
      <View style={styles.completeWorkout}>
        <CompleteWorkoutContainer />
      </View>
    </View>
  );
};
export default SettingsSpace;
