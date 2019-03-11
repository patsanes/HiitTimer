import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  cycles: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
const Lap = props => {
  const { name } = props;
  return (
    <View style={styles.cycles}>
      <Text> 0/0</Text>
      <Text> {name}</Text>
    </View>
  );
};
Lap.propTypes = {
  name: PropTypes.string.isRequired,
};
Lap.defaultProps = {};

export default Lap;
