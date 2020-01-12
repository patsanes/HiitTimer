import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { colors, fontFamilies, fontSizes, space } from 'HiitTimer/src/utils/theme';
import I18N from 'HiitTimer/src/lenguage';

const styles = StyleSheet.create({
  container: {
    borderRadius: space.xxLarge / 2,
    borderColor: colors.secondaryDark,
    backgroundColor: colors.secondaryDark,
    borderWidth: space.xxSmall,
    padding: 15,
    alignItems: 'center',
    flexGrow: 1,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primaryLight,
    height: space.xxLarge,
    width: space.xxLarge,
    borderRadius: space.xxLarge / 2,
    borderWidth: space.xxSmall,
    marginBottom: space.xSmall,
  },
  text: {
    color: colors.primaryLight,
    padding: 5,
    fontFamily: fontFamilies.montserrat,
  },
});

const InfoSpace = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="info" size={fontSizes.xSmall} color={colors.primaryLight} />
      </View>
      <Text style={styles.text}> {I18N.infoSpaceText}</Text>
    </View>
  );
};
export default InfoSpace;
