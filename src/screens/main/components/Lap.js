import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { fontSizes, fontFamilies, colors } from '../../../utils/theme';

const styles = StyleSheet.create({
  cycles: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  baseText: {
    fontSize: fontSizes.xSmall,
    fontWeight: 'bold',
    fontFamily: fontFamilies.leagueGothic,
    color: colors.secondaryDark,
  },
});
const Lap = props => {
  const { name, count, current } = props;
  return (
    <View style={styles.cycles}>
      <Text style={styles.baseText}>
        {current}/{count}
      </Text>
      <Text style={styles.baseText}>{name}</Text>
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
