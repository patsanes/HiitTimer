import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import CircularProgressContainer from './CircularProgressContainer';
import { colors } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    height: 20,
    justifyContent: 'center',
  },
});
class ProgressContainer extends React.Component {
  render() {
    const { fill, fillComplete, tintColor } = this.props;
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
  }
}

ProgressContainer.propTypes = {
  fill: PropTypes.number.isRequired,
  fillComplete: PropTypes.number.isRequired,
  tintColor: PropTypes.string.isRequired,
  // backgroundColor: PropTypes.string.isRequired,
};
export default ProgressContainer;
