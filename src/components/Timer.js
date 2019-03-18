import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import PropTypes from "prop-types";
import Lap from "./Lap";
import Countdown from "./Countdown";
import TimeElapsed from "./TimeElapsed";

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
  },
  container: {
    flex: 3,
    flexDirection: "column"
  },
  middleTop: {
    flex: 5,
    justifyContent: "flex-end"
  },
  middleMiddle: {
    flex: 1,
    flexDirection: "row"
  },
  middleBottom: {
    flex: 4
  }
});

const Timer = props => {
  const { serie, cycle, training, isPlay, isStop, startTime } = props;
  return (
    <View style={styles.container}>
      <View style={styles.middleTop}>
        <Countdown isPause={isPlay} isStop={isStop} countdown={training} />
      </View>
      <View style={styles.middleMiddle}>
        <Lap name="Cycles" count={cycle} />
        <Lap name="Series" count={serie} />
      </View>
      <View style={styles.middleBottom}>
        {/* <TimeElapsed startTime={startTime} /> */}
        <TimeElapsed />
      </View>
    </View>
  );
};

Timer.propTypes = {
  serie: PropTypes.number.isRequired,
  cycle: PropTypes.number.isRequired,
  training: PropTypes.number.isRequired
};

Timer.defaultProps = {};

export default Timer;
