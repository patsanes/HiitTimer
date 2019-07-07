import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

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
    const { inProgress, isRest } = session;

    const onPressPlay = () => {
      dispatch(goToCountdown());
      // Build notification
      const notification = new firebase.notifications.Notification();

      // Schedule the notification for 1 minute in the future
      const date = new Date();
      date.setMinutes(date.getMinutes() + 1);

      firebase.notifications().scheduleNotification(notification, {
        fireDate: date.getTime(),
      });
    };
    const goToCongratsFromHome = () => dispatch(goToCongrats());

    return (
      <View style={styles.container}>
        <BackgroundGradient isRest={isRest}>
          <View style={styles.top} />
          <View style={styles.middle}>
            <WorkoutSpace inProgress={inProgress} goToCongratsFromHome={goToCongratsFromHome} />
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
