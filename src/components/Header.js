import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { fontSizes, fontFamilies, colors } from '../utils/theme';

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.xSmall,
    alignSelf: 'flex-start',
    color: colors.secondary,
    fontFamily: fontFamilies.permanent,
  },
});

export default class Header extends React.PureComponent {
  render() {
    return (
      <View>
        <Text style={styles.title}>Training </Text>
      </View>
    );
  }
}
