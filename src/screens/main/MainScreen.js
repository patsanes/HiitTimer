import React from 'react';
import { View, AppState } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

import { observer, inject } from 'mobx-react';
import { BackgroundGradient } from 'HiitTimer/src/components';
import { goToCountdown, goToCongrats } from 'HiitTimer/src/navigation/actions';
import { PlayPauseContainer } from './containers';
import { WorkoutSpace } from './components';

import styles from './styles';

// const MainScreen = props => {
//   const { session, navigation } = props;
//     const { dispatch } = navigation;
//     const { isRest } = session;

//     const onPressPlay = () => {
//       dispatch(goToCountdown());

//       // https://rnfirebase.io/docs/v5.x.x/messaging/receiving-messages#2)-Request-permissions
//       firebase.messaging().requestPermission();
//       // .then(() => {
//       //   // User has authorised
//       // })
//       // .catch(error => {
//       //   // User has rejected permissions
//       // });

//       // Build notification
//       const notification = new firebase.notifications.Notification()
//         .setNotificationId('notificationId')
//         .setTitle('HiitTimer')
//         .setBody('Timer in background...');
//       // .setData({
//       //   key1: 'value1',
//       //   key2: 'value2',
//       // });
//       // Schedule the notification for 1 minute in the future
//       const date = new Date();
//       date.setSeconds(date.getSeconds() + 10);

//       firebase.notifications().scheduleNotification(notification, {
//         fireDate: date.getTime(),
//       });
//     };
//     const goToCongratsFromHome = () => dispatch(goToCongrats());

//     return (
//       <View style={styles.container}>
//         <BackgroundGradient isRest={isRest}>
//           <View style={styles.top} />
//           <View style={styles.middle}>
//             <WorkoutSpace goToCongratsFromHome={goToCongratsFromHome} />
//           </View>
//           <View style={styles.bottom}>
//             <PlayPauseContainer onPress={onPressPlay} />
//           </View>
//         </BackgroundGradient>
//       </View>
//     );
// };
class MainScreen extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handlePushNotifications);

    // this.notificationListener = firebase.notifications().onNotificationOpened(_notification => {
    //   // this.notificationListener = firebase.notifications().onNotificationOpened(_notification => {
    //   // firebase.notifications().onNotification(_notification => {
    //   // firebase.notifications().onNotificationDisplayed(_notification => {
    //   // console.log(notification);
    //   const notification = new firebase.notifications.Notification()
    //     .setNotificationId('notificationId')
    //     .setTitle('Zuritssssitititi')
    //     .setBody('My ,,,,')
    //     .setData({
    //       key1: 'value1',
    //       key2: 'value2',
    //     });
    //   console.log('notification', _notification);

    //   // Schedule the notification for 1 minute in the future
    //   const date = new Date();
    //   date.setSeconds(date.getSeconds() + 3);
    //   // firebase.notifications().displayNotification(notification);

    //   firebase.notifications().scheduleNotification(notification, {
    //     fireDate: date.getTime(),
    //   });
    // });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handlePushNotifications);
    // this.notificationListener();
  }

  handlePushNotifications = nextAppState => {
    if (nextAppState === 'background') {
      // Build notification
      // const notification = new firebase.notifications.Notification()
      //   .setNotificationId('notificationId')
      //   .setTitle('HiitTimer')
      //   .setBody('Timer in background...');
      // // .setData({
      // //   key1: 'value1',
      // //   key2: 'value2',
      // // });
      // console.log(notification);
      // // Schedule the notification for 1 minute in the future
      // const date = new Date();
      // date.setSeconds(date.getSeconds() + 3);
      // // firebase.notifications().displayNotification(notification);
      // firebase.notifications().scheduleNotification(notification, {
      //   fireDate: date.getTime(),
      // });
    }
  };

  render() {
    const { session, navigation } = this.props;
    const { dispatch } = navigation;
    const { isRest } = session;

    const onPressPlay = () => {
      dispatch(goToCountdown());

      // https://rnfirebase.io/docs/v5.x.x/messaging/receiving-messages#2)-Request-permissions
      firebase.messaging().requestPermission();
      // .then(() => {
      //   // User has authorised
      // })
      // .catch(error => {
      //   // User has rejected permissions
      // });

      // Build notification
      const notification = new firebase.notifications.Notification()
        .setNotificationId('notificationId')
        .setTitle('HiitTimer')
        .setBody('Timer in background...');
      // .setData({
      //   key1: 'value1',
      //   key2: 'value2',
      // });
      // Schedule the notification for 1 minute in the future
      const date = new Date();
      date.setSeconds(date.getSeconds() + 10);

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
            <WorkoutSpace goToCongratsFromHome={goToCongratsFromHome} />
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
