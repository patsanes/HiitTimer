import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { goToHome } from '../navigation/actions';

const styles = StyleSheet.create({
  touchable: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
export default class ConfigScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const onPress = () => dispatch(goToHome());
    return (
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Text>ConfigScreen</Text>
      </TouchableOpacity>
    );
  }
}

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
