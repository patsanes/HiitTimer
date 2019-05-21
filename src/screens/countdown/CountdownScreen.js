import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { StartCountdownContainer } from './containers';
import { goToHome } from '../../navigation/actions';
import styles from './styles';

class CountdownScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const goHome = () => dispatch(goToHome());

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
            <StartCountdownContainer goToHome={goHome} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

CountdownScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CountdownScreen;
