import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import { UselessTextInput } from '.';
import { TextInputCountDownContainer, PickerTrainingContainer } from '../containers';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  upper: {
    flex: 0.5,
    backgroundColor: 'black',
  },
  middle: {
    flex: 8,
    borderWidth: 1,
  },
  blackSpace: {
    flex: 1,
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
      <View style={styles.upper} />
      <View style={styles.blackSpace} />
      <View style={styles.middle}>
        {/* <TextInputSessionContainer placeholder="Countdown" /> */}
        {/* <TextInputCountDownContainer /> */}
        <PickerTrainingContainer />
        {/* <TextInputRestContainer  /> */}
        {/* <TextInputCycleContainer  /> */}
        <Text style={styles.text}>Rest</Text>

        <Text style={styles.text}>Cycles</Text>

        <Text style={styles.text}>Series</Text>
      </View>
      <View style={styles.blackSpace} />

      <View style={styles.bottom} />
      <View style={styles.blackSpace} />
    </>
  );
};
export default SettingsSpace;
