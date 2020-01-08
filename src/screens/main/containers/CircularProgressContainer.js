import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '../components';

const CircularProgressContainer = props => {
  const { size, fill, tintColor, backgroundColor } = props;
  return (
    <CircularProgress
      size={size}
      fill={fill}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
    />
  );
};

CircularProgressContainer.propTypes = {
  size: PropTypes.number.isRequired,
  fill: PropTypes.number.isRequired,
  tintColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default CircularProgressContainer;
