import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
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
  },
  middleRight: {
    flex: 2,
  },
});

const WorkoutSpace = props => {
  const { inProgress, onCompleteWorkout } = props;
  return (
    <>
      <View style={styles.middleLeft} />
      <View style={styles.middleCenter}>
        <Timer inProgress={inProgress} onCompleteWorkout={onCompleteWorkout} />
      </View>
      <View style={styles.middleRight} />
    </>
  );
};
WorkoutSpace.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  onCompleteWorkout: PropTypes.func.isRequired,
};

export default WorkoutSpace;
