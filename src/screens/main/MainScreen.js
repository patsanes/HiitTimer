import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { observer, inject } from 'mobx-react';
import { PlayPauseContainer } from './containers';
import { BackgroundGradient } from '../../components';

import { WorkoutSpace } from './components';
import { goToCountdown } from '../../navigation/actions';

import styles from './styles';

class MainScreen extends React.Component {
  render() {
    const { session, navigation } = this.props;
    const { dispatch } = navigation;
    const { inProgress } = session;

    console.log('Main Screen is timer started: ', { inProgress });
    console.log('Session', { session });

    const onPressPlay = () => dispatch(goToCountdown());

    return (
      <View style={styles.container}>
        <BackgroundGradient>
          <View style={styles.top} />
          <View style={styles.middle}>
            <WorkoutSpace inProgress={inProgress} />
          </View>
          <View style={styles.bottom}>
            {/* Va a countdown para arrancar la cuenta regresiva, pero que pasa cuando no necesito ir? */}
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

// export default MainScreen;
export default inject('session')(observer(MainScreen));
