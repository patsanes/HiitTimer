import React from 'react';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { space } from 'HiitTimer/src/utils/theme';

const CircularProgress = props => {
  const { size, fill, tintColor, backgroundColor } = props;

  return (
    <AnimatedCircularProgress
      size={size}
      width={space.large}
      fill={fill}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
      lineCap="round"
      rotation={0}
      style={{ transform: [{ scaleX: -1 }] }}
    />
  );
};

CircularProgress.propTypes = {
  size: PropTypes.number.isRequired,
  fill: PropTypes.number.isRequired,
  tintColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default CircularProgress;
