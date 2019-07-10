import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LottieView from 'lottie-react-native';
import styles from './styles';
import { BackgroundGradient } from '../../components';
import { CongratsContainer } from './containers';
import { source } from '../../../assets/animations/check_orange.json';

import { goToHome } from '../../navigation/actions';

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
            <LottieView source={source} autoPlay loop={false} />
          </View>
        </BackgroundGradient>
      </>
    );
  }
}

CongratsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
