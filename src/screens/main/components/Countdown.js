import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Sound from 'react-native-sound';
import { ProgressContainer, TimerMachineContainer } from '../containers';
import { fontSizes, fontFamilies, colors } from '../../../utils/theme';

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSizes.xxxLarge,
    position: 'absolute',
    fontFamily: fontFamilies.leagueGothic,
    fontWeight: 'bold',
    color: colors.secondaryDark,
    alignSelf: 'center',
  },
});

const Countdown = props => {
  const { count, isRest, fill, fillComplete, _onFinish } = props;
  const backgroundColors = isRest ? colors.restGreen : colors.restBlue;
  // const backgroundColorsOff = isRest ? '#1D4350' : '#1D4350';
  const backgroundColorsOff = isRest ? colors.primaryLight : colors.primaryDark;

  Sound.setCategory('Playback');

  return (
    <React.Fragment>
      <Text style={styles.titleText}>
        <TimerMachineContainer count={count} _onFinish={_onFinish} />
      </Text>
      <ProgressContainer
        fill={fill}
        fillComplete={fillComplete}
        tintColor={backgroundColors}
        backgroundColor={backgroundColorsOff}
      />
    </React.Fragment>
  );
};

Countdown.propTypes = {
  count: PropTypes.number.isRequired,
  isRest: PropTypes.bool.isRequired,
  fill: PropTypes.number.isRequired,
  fillComplete: PropTypes.number.isRequired,
  _onFinish: PropTypes.func.isRequired,
};

Countdown.defaultProps = {};

export default Countdown;
