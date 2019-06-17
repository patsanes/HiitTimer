import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LottieView from 'lottie-react-native';
import styles from './styles';
import { BackgroundGradient } from '../../components';
import { CongratsContainer } from './containers';

import { goToHome } from '../../navigation/actions';

export default class CongratsScreen extends React.Component {
  componentDidMount() {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const goHome = () => dispatch(goToHome());
    return (
      <>
        {/* <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../../assets/animations/confetti.json')}
        /> */}
        <BackgroundGradient isRest={false}>
          <View style={styles.top}>{/* <Header onPress={onPress} /> */}</View>
          <View style={styles.middle}>
            <CongratsContainer onPress={goHome} />
          </View>
          <View style={styles.bottom}>
            {/* <LottieView
              source={require('../../../assets/animations/confetti.json')}
              autoPlay
              loop
            /> */}
            <LottieView
              source={require('../../../assets/animations/check_orange.json')}
              autoPlay
              loop
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
