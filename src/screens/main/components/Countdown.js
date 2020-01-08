import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Sound from 'react-native-sound';
import { fontSizes, fontFamilies, colors } from 'HiitTimer/src/utils/theme';
import { ProgressContainer, TimerMachineContainer } from '../containers';

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
  const { fill, fillComplete, _onFinish, currentCircleColor } = props;
  // const backgroundColors = isRest ? colors.restGreen : colors.restBlue;
  // const backgroundColorsOff = isRest ? colors.restGreenDeep : colors.secondaryLight;

  Sound.setCategory('Playback');

  return (
    <React.Fragment>
      <Text style={styles.titleText}>
        <TimerMachineContainer _onFinish={_onFinish} />
      </Text>
      <ProgressContainer
        fill={fill}
        fillComplete={fillComplete}
        tintColor={currentCircleColor}
        // backgroundColor={backgroundColorsOff}
      />
    </React.Fragment>
  );
};

Countdown.propTypes = {
  // count: PropTypes.number.isRequired,
  // isRest: PropTypes.bool.isRequired,
  fill: PropTypes.number.isRequired,
  fillComplete: PropTypes.number.isRequired,
  _onFinish: PropTypes.func.isRequired,
  currentCircleColor: PropTypes.string.isRequired,
};

Countdown.defaultProps = {};

export default Countdown;
