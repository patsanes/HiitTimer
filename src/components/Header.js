import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import I18N from 'HiitTimer/src/lenguage';
import { colors, fontSizes, fontFamilies } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.xxxSmall,
    color: colors.secondary,
    fontFamily: fontFamilies.montserrat,
  },
});

export default class Header extends React.PureComponent {
  render() {
    return (
      <View>
        <Text style={styles.title}> {I18N.enterTheDataLabel}</Text>
      </View>
    );
  }
}
