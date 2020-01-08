import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
        <Text style={styles.title}> Enter the data you want for your workout:</Text>
      </View>
    );
  }
}
