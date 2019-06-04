import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { StartCountdownContainer } from './containers';
import { goToHome } from '../../navigation/actions';
import styles from './styles';
import { observer, inject } from 'mobx-react';

class CountdownScreen extends React.Component {
  goToHomeFromCountdown = () => {
    const { navigation, session } = this.props;
    const { goBack, dispatch } = navigation;
    const { inProgress, setInProgress, setPlay } = session;

    setInProgress();
    setPlay();
    goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5]}
          colors={['#FF416C', '#FF4B2B']}
          style={styles.linearGradient}
        >
          <View style={styles.middle}>
            <StartCountdownContainer goToHome={this.goToHomeFromCountdown} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

CountdownScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CountdownScreen));
