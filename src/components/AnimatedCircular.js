import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React from 'react';
import { View } from 'react-native';

const AnimatedCircular = () => {
  return (
    <View>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      />
    </View>
  );
};

export default AnimatedCircular;
