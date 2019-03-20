import React from 'react';
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
  const { name, count, current } = props;
  return (
    <View style={styles.cycles}>
      <Text>
        {current}/{count}
      </Text>
      <Text>{name}</Text>
    </View>
  );
};
Lap.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};
Lap.defaultProps = {};

export default Lap;
