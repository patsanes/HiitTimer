import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LottieView from 'lottie-react-native';
import styles from './styles';
import { BackgroundGradient } from '../../components';
import { CongratsContainer } from './containers';

import { goToHome } from '../../navigation/actions';

export default class CongratsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const goHome = () => dispatch(goToHome());
    return (
      <>
        <BackgroundGradient isRest={false}>
          <View style={styles.top}>{/* <Header onPress={onPress} /> */}</View>
          <View style={styles.middle}>
            <CongratsContainer onPress={goHome} />
          </View>
          <View style={styles.bottom}>
            <LottieView
              source={require('../../../assets/animations/check_orange.json')}
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
