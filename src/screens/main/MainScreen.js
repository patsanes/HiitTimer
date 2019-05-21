import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { PlayPauseContainer } from './containers';
import { WorkoutSpace, ConfigTraining } from './components';
import { goToSettings, goToCountdown } from '../../navigation/actions';

import styles from './styles';

class MainScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;

    const onPressSettings = () => dispatch(goToSettings());
    const onPressPlay = () => dispatch(goToCountdown());

    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5]}
          colors={['#614385', '#516395']}
          style={styles.linearGradient}
        >
          <View style={styles.top}>{<ConfigTraining onPress={onPressSettings} />}</View>
          <View style={styles.middle}>
            <WorkoutSpace />
          </View>
          <View style={styles.bottom}>
            <PlayPauseContainer onPress={onPressPlay} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainScreen;
