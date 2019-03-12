import React from "react";
import { observer, inject } from "mobx-react";
import { StyleSheet, View } from "react-native";

import Timer from "./components/Timer";
import PlayPause from "./components/PlayPause";
import WorkoutSpace from "./components/WorkoutSpace";
// import { PlayPause2 } from './containers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "powderblue",
    backgroundColor: "steelblue"
  },
  top: {
    flex: 2,
    borderWidth: 2,
    borderColor: "powderblue",
    backgroundColor: "steelblue",
    justifyContent: "flex-end"
  },
  middle: {
    flex: 7,
    borderWidth: 2,
    borderColor: "powderblue",
    backgroundColor: "steelblue",
    flexDirection: "row",
    justifyContent: "center"
  },
  middleLeft: {
    flex: 3
  },
  middleCenter: {
    flex: 3
  },
  middleRight: {
    flex: 3
  },
  bottom: {
    flex: 3,
    borderWidth: 2,
    borderColor: "powderblue",
    backgroundColor: "steelblue",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

class MainScreen extends React.Component {
  state = {
    isPlay: false
  };

  onPlay = () => this.setState({ isPlay: true });
  onPause = () => this.setState({ isPlay: false });
  stop = () => this.setState({ isPlay: false });

  render() {
    console.log(this.props);
    const { isPlay } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle}>
          <View style={styles.middleLeft} />
          <View style={styles.middleCenter}>
            {/* <WorkoutSpaceContainer /> */}
            <WorkoutSpace prueba={isPlay} />
            <Timer timePass="00" countdown="11" />
          </View>
          <View style={styles.middleRight} />
        </View>
        <View style={styles.bottom}>
          {/* <PlayPauseContainer /> */}
          <PlayPause
            start={isPlay}
            onPlay={this.onPlay}
            onPause={this.onPause}
            stop={this.stop}
          />
        </View>
      </View>
    );
  }
}

export default inject("session")(observer(MainScreen));

// const App = inject("shop")(
//   observer(({ shop }) => (

{
  /*
<View style={styles.container}>
  <View style={styles.top} >
    <Menu />
  </View>
  <View style={styles.middle}>
    <WorkoutSpaceContainer />
  </View>
  <View style={styles.bottom}>
    <PlayPauseContainer />
  </View>
</View>
 */
}
