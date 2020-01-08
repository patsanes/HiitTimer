import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Header, BackgroundGradient } from 'HiitTimer/src/components';
import { goToHome } from 'HiitTimer/src/navigation/actions';
import styles from './styles';
import { SettingsSpace, InfoSpace } from './components';

export default class ConfigScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const onPress = () => dispatch(goToHome());
    return (
      <BackgroundGradient isRest={false}>
        <View style={styles.container}>
          <View style={styles.top}>{<Header onPress={onPress} />}</View>
          <View style={styles.middle}>
            <SettingsSpace />
          </View>
          <View style={styles.bottom}>
            <InfoSpace />
          </View>
        </View>
      </BackgroundGradient>
    );
  }
}

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
