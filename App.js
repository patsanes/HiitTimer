import React, { Component } from 'react';
// import MainScreen from "./.src/MainScreen";
import { StyleSheet, Text, View } from 'react-native';
import ButtonTimer from './src/components/Button';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'olive',
  },
  top: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'tomato',
  },
  middle: {
    flex: 6,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  middleLeft: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  middleCenter: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  middleRight: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  bottom: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'tomato',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle}>
          <View style={styles.middleLeft} />
          <View style={styles.middleCenter}>
            <Text>HOLA</Text>
          </View>
          <View style={styles.middleRight} />
        </View>
        <View style={styles.bottom}>
          <ButtonTimer />
        </View>
      </View>
    );
  }
}
