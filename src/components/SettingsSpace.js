import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { UselessTextInput } from '.';
import {
  PickerTrainingContainer,
  PickerRestContainer,
  PickerCycleContainer,
  PickerSerieContainer,
} from '../containers';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  middle: {
    flex: 8,
    borderWidth: 1,
  },
  blackSpace: {
    // flex: 1,
    borderWidth: 1,
  },
  bottom: {
    flex: 0.5,
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
      </View>
      <View style={styles.bottom} />
    </>
  );
};
export default SettingsSpace;
