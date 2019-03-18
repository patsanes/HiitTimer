import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import TimerMachine from "react-timer-machine";
import PropTypes from "prop-types";

momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
  baseText: {
    fontSize: 40,
    alignSelf: "center",
    color: "skyblue"
  },
  titleText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "powderblue",
    alignSelf: "center"
  }
});

const Countdown = props => {
  const { countdown, isPause, isStop } = props;
  const count = { countdown }.countdown;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        <TimerMachine
          timeStart={count * 1000} // empieza a los 20 segundos
          timeEnd={1000} // termina
          paused={!isPause}
          started
          countdown
          interval={1000}
          formatTimer={(time, ms) =>
            moment.duration(ms, "milliseconds").format("h, m, s")
          }
          onStop={time =>
            console.info(`Timer stopped: ${JSON.stringify(time)}`)
          }
          onComplete={time =>
            console.info(`Timer completed: ${JSON.stringify(time)}`)
          }
        />
      </Text>
    </View>
  );
};

Countdown.propTypes = {
  countdown: PropTypes.number.isRequired
};

Countdown.defaultProps = {};

export default Countdown;
