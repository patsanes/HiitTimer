import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { colors } from 'HiitTimer/src/utils/theme';
import CircularProgressContainer from './CircularProgressContainer';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    height: 20,
    justifyContent: 'center',
  },
});
const ProgressContainer = props => {
  const { fill, fillComplete, tintColor } = props;
  return (
    <>
      {/* Countdown workout */}
      <View style={styles.container}>
        <CircularProgressContainer
          size={350}
          fill={fillComplete}
          tintColor={colors.progressPink}
          backgroundColor={colors.secondary}
        />
      </View>
      {/* Complete workout */}
      <View style={styles.container}>
        <CircularProgressContainer
          size={320}
          fill={fill}
          tintColor={tintColor}
          backgroundColor={colors.secondaryLight}
        />
      </View>
    </>
  );
};

ProgressContainer.propTypes = {
  fill: PropTypes.number.isRequired,
  fillComplete: PropTypes.number.isRequired,
  tintColor: PropTypes.string.isRequired,
  // backgroundColor: PropTypes.string.isRequired,
};
export default ProgressContainer;
