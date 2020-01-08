import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { colors, fontSizes, space } from 'HiitTimer/src/utils/theme';
import I18N from 'HiitTimer/src/lenguage';

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondaryDark,
    height: space.xxLarge,
    width: space.xxLarge,
    borderRadius: space.xxLarge / 2,
    borderWidth: space.xxSmall,
    marginBottom: space.xSmall,
  },
});

const InfoSpace = () => {
  return (
    <React.Fragment>
      <View style={styles.iconContainer}>
        <Icon name="info" size={fontSizes.xSmall} color={colors.secondaryDark} />
      </View>
      <Text> {I18N.infoSpaceText}</Text>
    </React.Fragment>
  );
};
export default InfoSpace;
