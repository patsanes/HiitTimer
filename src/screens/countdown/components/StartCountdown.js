import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 250,
    position: 'absolute',
    fontFamily: 'League Gothic',
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});
const StartCountdown = props => {
  const { currentCount } = props;
  return (
    <React.Fragment>
      <Text style={styles.titleText}>{currentCount}</Text>
    </React.Fragment>
  );
};

StartCountdown.propTypes = {
  currentCount: PropTypes.number.isRequired,
};
StartCountdown.defaultProps = {};
export default StartCountdown;
