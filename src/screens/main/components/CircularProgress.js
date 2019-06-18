import React from 'react';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CircularProgress = props => {
  const { size, fill, tintColor, backgroundColor } = props;

  return (
    <AnimatedCircularProgress
      size={size}
      width={15}
      fill={fill}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
      lineCap="round"
      rotation={0}
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
