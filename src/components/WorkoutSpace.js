import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import Timer from "./Timer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: "grey"
  },
  text: {
    fontSize: 40
  },
  middleLeft: {
    flex: 3
  },
  middleCenter: {
    flex: 3
  },
  middleRight: {
    flex: 3
  }
});

const WorkoutSpace = props => {
  const { serie, cycle, training, rest, isPlay, isStop } = props;
  return (
    <>
      <View style={styles.middleLeft} />
      <View style={styles.middleCenter}>
        <Timer
          serie={serie}
          cycle={cycle}
          training={training}
          rest={rest}
          isPlay={isPlay}
          isStop={isStop}
        />
      </View>
      <View style={styles.middleRight} />
    </>
  );
};

WorkoutSpace.propTypes = {
  serie: PropTypes.number.isRequired,
  cycle: PropTypes.number.isRequired,
  training: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  isPlay: PropTypes.bool.isRequired,
  isStop: PropTypes.bool.isRequired
};

export default WorkoutSpace;
