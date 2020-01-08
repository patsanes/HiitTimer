import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React from 'react';
import { View } from 'react-native';
import { space, colors } from 'HiitTimer/src/utils/theme';

const AnimatedCircular = () => {
  return (
    <View>
      <AnimatedCircularProgress
        size={space.jumbo}
        width={space.large}
        fill={100}
        tintColor={colors.skyAnimated}
        backgroundColor={colors.greyAnimated}
      />
    </View>
  );
};

export default AnimatedCircular;
