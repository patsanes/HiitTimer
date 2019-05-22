import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { PlayPauseContainer } from './containers';
import { BackgroundGradient } from '../../components';

import { WorkoutSpace } from './components';
import { goToSettings, goToCountdown } from '../../navigation/actions';

import styles from './styles';

class MainScreen extends React.Component {
  render() {
    const { inProgress, navigation } = this.props;
    const { dispatch } = navigation;

    const onPressSettings = () => dispatch(goToSettings());
    const onPressPlay = () => dispatch(goToCountdown());

    return (
      <View style={styles.container}>
        <BackgroundGradient>
          <View style={styles.top} />
          <View style={styles.middle}>
            <WorkoutSpace />
          </View>
          <View style={styles.bottom}>
            <PlayPauseContainer onPress={onPressPlay} />
          </View>
        </BackgroundGradient>
      </View>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  // inProgress: PropTypes.bool.isRequired,
};

export default MainScreen;
