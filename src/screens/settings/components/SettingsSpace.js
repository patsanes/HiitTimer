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
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#16222A',
  },
});

const SettingsSpace = () => {
  return (
    <React.Fragment>
      <View style={styles.middle}>
        <PickerTrainingContainer />
        <PickerRestContainer />
        <PickerCycleContainer />
        <PickerSerieContainer />
        <PickerRestBetweenCyclesContainer />
        <PickerStartCountdownContainer />
      </View>
      <View style={styles.completeWorkout}>
        <CompleteWorkoutContainer />
      </View>
    </React.Fragment>
  );
};
export default SettingsSpace;
