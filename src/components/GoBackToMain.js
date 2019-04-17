import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  topLeft: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  topM: {
    flex: 6,
    justifyContent: 'flex-end',
  },
  topRight: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 30,
    alignSelf: 'center',
    color: 'powderblue',
    fontFamily: 'Permanent Marker',
  },
  icon: {
    alignSelf: 'center',
    paddingVertical: 6,
  },
  button: {
    justifyContent: 'center',
    color: 'white',
  },
});

export default class GoBackToMain extends React.PureComponent {
  render() {
    const { onPress } = this.props;
    const params = {
      style: [styles.button, onPress],
    };
    return (
      <>
        <View style={styles.topLeft}>
          <TouchableOpacity {...params}>
            <Icon
              name="chevron-left"
              size={30}
              color="powderblue"
              style={styles.icon}
              onPress={onPress}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topM}>
          <Text style={styles.title}>SETTINGS </Text>
        </View>
        <View style={styles.topRight} />
      </>
    );
  }
}
GoBackToMain.propTypes = {
  onPress: PropTypes.func.isRequired,
};
