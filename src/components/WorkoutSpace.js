import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Timer from './Timer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'grey',
  },
  text: {
    fontSize: 40,
  },
  middleLeft: {
    flex: 3,
  },
  middleCenter: {
    flex: 3,
  },
  middleRight: {
    flex: 3,
  },
});

const WorkoutSpace = props => {
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
