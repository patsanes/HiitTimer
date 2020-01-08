import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { fontSizes, fontFamilies, colors, space } from 'HiitTimer/src/utils/theme';
import { ButtonConfig } from 'HiitTimer/src/components';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.neutral,
    flexDirection: 'column',
  },
  topLeft: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  topMiddle: {
    flex: 6,
    justifyContent: 'flex-end',
  },
  topRight: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  titleText: {
    paddingHorizontal: space.medium,
    fontSize: fontSizes.xxLarge,
    color: colors.neutral,
    alignSelf: 'center',
    fontFamily: fontFamilies.permanent,
  },
});

const ConfigTraining = props => {
  const { onPress } = props;
  return (
    <>
      <View style={styles.topLeft} />
      <View style={styles.topMiddle}>
        <Text style={styles.titleText}>HIIT </Text>
      </View>
      <View style={styles.topRight}>
        <ButtonConfig style={styles.button} disabled={false} name="cog" onPress={onPress} />
      </View>
    </>
  );
};
export default ConfigTraining;

ConfigTraining.propTypes = {
  onPress: PropTypes.func.isRequired,
};
