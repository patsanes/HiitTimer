import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { colors } from 'HiitTimer/src/utils/theme';
import { useStores } from 'HiitTimer/src/stores/hooks';
import { StartCountdownContainer } from './containers';
import styles from './styles';

const CountdownScreen = observer(props => {
  const { session } = useStores();

  const goToHomeFromCountdown = () => {
    const { navigation } = props;
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
});

CountdownScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CountdownScreen;
