import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { Header } from '../../components';
import { SettingsSpace, InfoSpace } from './components';

import { goToHome } from '../../navigation/actions';

export default class ConfigScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const onPress = () => dispatch(goToHome());
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.9]}
        colors={['#16222A', '#3A6073']}
        style={styles.linearGradient}
      >
        <View style={styles.top}>
          <Header onPress={onPress} />
        </View>
        <View style={styles.middle}>
          <SettingsSpace />
        </View>
        <View style={styles.bottom}>
          <InfoSpace />
        </View>
      </LinearGradient>
    );
  }
}

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
