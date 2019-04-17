import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { UselessTextInput } from '.';
import {
  PickerTrainingContainer,
  PickerRestContainer,
  PickerCycleContainer,
  PickerSerieContainer,
  PickerRestBetweenCyclesContainer,
  PickerStartCountdownContainer,
} from '../containers';

const styles = StyleSheet.create({
  // text: {
  //   fontSize: 18,
  //   color: 'white',
  // },
  middle: {
    flex: 6,
    borderWidth: 1,
    backgroundColor: '#16222A',
  },
  blackSpace: {
    borderWidth: 1,
  },
  bottom: {
    flex: 4,
    backgroundColor: 'black',
  },
});

const SettingsSpace = () => {
  return (
    <>
      <View style={styles.middle}>
        <PickerTrainingContainer />
        <PickerRestContainer />
        <PickerCycleContainer />
        <PickerSerieContainer />
        <PickerRestBetweenCyclesContainer />
        <PickerStartCountdownContainer />
      </View>
      <View style={styles.bottom} />
    </>
  );
};
export default SettingsSpace;
