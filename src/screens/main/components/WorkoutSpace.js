import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { fontSizes } from 'HiitTimer/src/utils/theme';
import Timer from './Timer';

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xLarge,
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
  const { goToCongratsFromHome } = props;
  return (
    <>
      <View style={styles.middleLeft} />
      <View style={styles.middleCenter}>
        <Timer goToCongratsFromHome={goToCongratsFromHome} />
      </View>
      <View style={styles.middleRight} />
    </>
  );
};
WorkoutSpace.propTypes = {
  // inProgress: PropTypes.bool.isRequired,
  goToCongratsFromHome: PropTypes.func.isRequired,
};

export default WorkoutSpace;
