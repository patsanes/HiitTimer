import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: '0,2%',
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: 'grey',
    fontFamily: 'Permanent Marker',
  },
});

export default class GoBackToMain extends React.PureComponent {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Training </Text>
        </View>
      </>
    );
  }
}
