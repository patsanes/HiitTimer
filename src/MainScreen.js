import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import PlayPauseContainer from './containers/PlayPauseContainer';
import WorkoutSpace from './components/WorkoutSpace';
import ConfigTrainingContainer from './containers/ConfigTrainingContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
  top: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  middle: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5]}
          colors={['#614385', '#516395']}
          style={styles.linearGradient}
        >
          <View style={styles.top}>
            <ConfigTrainingContainer />
          </View>
          <View style={styles.middle}>
            <WorkoutSpace />
          </View>
          <View style={styles.bottom}>
            <PlayPauseContainer />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default MainScreen;
