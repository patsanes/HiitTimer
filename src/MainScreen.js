import React from 'react';
// import { observer, inject } from "mobx-react";
import { StyleSheet, View } from 'react-native';

import Timer from './components/Timer';
import PlayPauseContainer from './containers/PlayPauseContainer';
import WorkoutSpace from './components/WorkoutSpace';

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
  bottom: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'powderblue',
    backgroundColor: 'steelblue',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle}>
          <WorkoutSpace />
        </View>
        <View style={styles.bottom}>
          <PlayPauseContainer />
        </View>
      </View>
    );
  }
}

// export default inject("session")(observer(MainScreen));
export default MainScreen;

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
