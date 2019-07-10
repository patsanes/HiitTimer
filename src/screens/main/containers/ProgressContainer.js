import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import CircularProgressContainer from './CircularProgressContainer';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    height: 20,
    justifyContent: 'center',
  },
  secondContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: 20,
    justifyContent: 'center',
  },
});
class ProgressContainer extends React.Component {
  render() {
    const { fill, fillComplete, tintColor, backgroundColor } = this.props;
    return (
      <>
        {/* Complete workout */}
        <View style={styles.container}>
          <CircularProgressContainer
            size={350}
            fill={fill}
            tintColor="#ff4b2b"
            backgroundColor="#1D4350"
          />
        </View>
        {/* Countdown workout */}
        <View style={styles.secondContainer}>
          <CircularProgressContainer
            size={320}
            fill={fillComplete}
            tintColor={tintColor}
            backgroundColor={backgroundColor}
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
  backgroundColor: PropTypes.string.isRequired,
};
export default ProgressContainer;
