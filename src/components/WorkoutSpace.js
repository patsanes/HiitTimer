import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  text: {
    fontSize: 40,
  },
});

const WorkoutSpace = props => {
  const { prueba } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{prueba.toString()}</Text>
    </View>
  );
};

WorkoutSpace.propTypes = {
  prueba: PropTypes.bool.isRequired,
  // countdown: PropTypes.string.isRequired,
};

WorkoutSpace.defaultProps = {
  prueba: false,
};

export default WorkoutSpace;
