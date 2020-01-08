import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { colors } from 'HiitTimer/src/utils/theme';
import { StartCountdownContainer } from './containers';
import styles from './styles';

const CountdownScreen = props => {
  const goToHomeFromCountdown = () => {
    const { navigation, session } = props;
    const { goBack } = navigation;
    const { setInProgress, setPlay } = session;
    setInProgress();
    setPlay();
    goBack();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5]}
        colors={[colors.countdownYellow, colors.countdownOrange]}
        style={styles.linearGradient}
      >
        <View style={styles.middle}>
          <StartCountdownContainer goToHome={goToHomeFromCountdown} />
        </View>
      </LinearGradient>
    </View>
  );
};

CountdownScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CountdownScreen));
