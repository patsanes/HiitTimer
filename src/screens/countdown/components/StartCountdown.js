import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { fontSizes, fontFamilies, colors, fontWeight } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSizes.xxxxLarge,
    position: 'absolute',
    fontFamily: fontFamilies.leagueGothic,
    fontWeight: fontWeight.bold,
    color: colors.neutral,
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
