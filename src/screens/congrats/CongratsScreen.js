import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import { BackgroundGradient } from 'HiitTimer/src/components';
import { goToHome } from 'HiitTimer/src/navigation/actions';
import { CongratsContainer } from './containers';
import styles from './styles';
// import { source } from '../../../assets/animations/check_orange.json';


export default class CongratsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const goHome = () => dispatch(goToHome());
    return (
      <>
        <BackgroundGradient isRest={false}>
          <View style={styles.top} />
          <View style={styles.middle}>
            <CongratsContainer onPress={goHome} />
          </View>
          <View style={styles.bottom}>
            <LottieView
              // eslint-disable-next-line global-require
              source={require('HiitTimer/assets/animations/check_orange.json')}
              autoPlay
              loop={false}
            />
          </View>
        </BackgroundGradient>
      </>
    );
  }
}

CongratsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
