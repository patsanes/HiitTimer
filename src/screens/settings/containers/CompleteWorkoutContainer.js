import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import I18N from 'HiitTimer/src/lenguage';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import { colors, fontSizes, fontFamilies } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.greyAnimated,
    borderWidth: 2,
    backgroundColor: colors.primaryDark,
    borderRadius: 2,
    padding: 10,
  },
  text: {
    fontSize: fontSizes.xxxSmall,
    textAlign: 'center',
    fontFamily: fontFamilies.montserrat,
  },
});

const CompleteWorkoutContainer = observer(() => {
  const { session } = useStores();
  const { endTime } = session;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {I18N.completeWorkoutTime}
        {endTime}.
      </Text>
    </View>
  );
});

export default CompleteWorkoutContainer;
