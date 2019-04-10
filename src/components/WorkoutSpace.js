import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from './Timer';

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  middleLeft: {
    flex: 2,
  },
  middleCenter: {
    flex: 4,
    borderWidth: 1,
  },
  middleRight: {
    flex: 2,
  },
});

const WorkoutSpace = () => {
  return (
    <>
      <View style={styles.middleLeft} />
      <View style={styles.middleCenter}>
        <Timer />
      </View>
      <View style={styles.middleRight} />
    </>
  );
};
export default WorkoutSpace;
