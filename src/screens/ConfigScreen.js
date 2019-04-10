import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { goToHome } from '../navigation/actions';

export default class ConfigScreen extends React.Component {
  render() {
    console.log(this.props);
    const onPress = () => this.props.navigation.dispatch(goToHome());
    return (
      <TouchableOpacity
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={onPress}
      >
        <Text>ConfigScreen</Text>
      </TouchableOpacity>
    );
  }
}
