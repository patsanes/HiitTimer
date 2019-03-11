import React, { Component } from 'react';
// import MainScreen from "./.src/MainScreen";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import { Text, StyleSheet, View } from 'react-native';

import ButtonTimer from './src/components/Button';

import Timer from './src/components/Timer';

momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'powderblue',
    backgroundColor: 'steelblue',
  },
  top: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'powderblue',
    backgroundColor: 'steelblue',
    justifyContent: 'flex-end',
  },
  middle: {
    flex: 7,
    borderWidth: 2,
    borderColor: 'powderblue',
    backgroundColor: 'steelblue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  middleLeft: {
    flex: 3,
  },
  middleCenter: {
    flex: 3,
  },
  middleRight: {
    flex: 3,
  },
  bottom: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'powderblue',
    backgroundColor: 'steelblue',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('HH:mm:ss'),
      // isTimerStarted: false,
      isTimerPaused: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: moment().format('HH:mm:ss'),
      // isTimerStarted: true,
      // timerStartedAt: moment(),
    });
  }

  playTimer() {
    this.setState({ isTimerPaused: false });
  }

  pauseTimer() {
    this.setState({ isTimerPaused: true });
  }

  // refreshTimer() {
  //   // TimerMachine.onStop();
  // }

  render() {
    const { time, isTimerPaused } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.paragraph}>La hora es {time}</Text>
          <Text style={{ color: 'powderblue', fontSize: 60 }}>Are u ready?</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.middleLeft} />
          <View style={styles.middleCenter}>
            <Timer timePass="00" countdown="11" />
          </View>
          <View style={styles.middleRight} />
        </View>
        <View style={styles.bottom}>
          <ButtonTimer style={styles.button} name="play" />
          <ButtonTimer style={styles.button} name="stop" />
        </View>
      </View>
    );
  }
}
