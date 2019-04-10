import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  left: {
    flex: 2,
  },
  center: {
    flex: 4,
    borderWidth: 1,
  },
  right: {
    flex: 2,
  },
});

const SettingsSpace = () => {
  return (
    <>
      <View style={styles.middleLeft} />
      <View style={styles.middleCenter}>
        <Text>Countdown</Text>
        <Text>Rest</Text>
        <Text>Cycles</Text>
        <Text>Series</Text>
      </View>
      <View style={styles.middleRight} />
    </>
  );
};
export default SettingsSpace;
