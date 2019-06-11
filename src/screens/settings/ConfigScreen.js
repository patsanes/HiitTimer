import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Header, BackgroundGradient } from '../../components';
import { SettingsSpace, InfoSpace } from './components';

import { goToHome } from '../../navigation/actions';

export default class ConfigScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const onPress = () => dispatch(goToHome());
    return (
      <BackgroundGradient isRest={false}>
        <View style={styles.top}>
          <Header onPress={onPress} />
        </View>
        <View style={styles.middle}>
          <SettingsSpace />
        </View>
        <View style={styles.bottom}>
          <InfoSpace />
        </View>
      </BackgroundGradient>
    );
  }
}

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
