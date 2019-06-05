import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { observer, inject } from 'mobx-react';
import { PlayPauseContainer } from './containers';
import { BackgroundGradient } from '../../components';

import { WorkoutSpace } from './components';
import { goToCountdown, goToCongrats } from '../../navigation/actions';

import styles from './styles';

class MainScreen extends React.Component {
  render() {
    const { session, navigation } = this.props;
    const { dispatch } = navigation;
    const { inProgress } = session;

    const onPressPlay = () => dispatch(goToCountdown());
    const onCompleteWorkout = () => dispatch(goToCongrats());

    return (
      <View style={styles.container}>
        <BackgroundGradient>
          <View style={styles.top} />
          <View style={styles.middle}>
            <WorkoutSpace inProgress={inProgress} onCompleteWorkout={onCompleteWorkout} />
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
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(MainScreen));
