import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// const styles = StyleSheet.create({
// });

const CircularProgress = props => {
  const { count } = props;

  return (
    <View>
      <AnimatedCircularProgress
        size={200}
        width={3}
        fill={count}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {/* {count => <Text>{count}</Text>} */}
      </AnimatedCircularProgress>
    </View>
  );
};

CircularProgress.propTypes = {
  count: PropTypes.number.isRequired,
};

CircularProgress.defaultProps = {};

export default CircularProgress;
