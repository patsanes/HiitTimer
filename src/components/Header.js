import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: 'grey',
    fontFamily: 'Permanent Marker',
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
