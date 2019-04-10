import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  topLeft: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  topMiddle: {
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
    color: 'powderblue',
    alignSelf: 'center',
    fontFamily: 'Permanent Marker',
  },
});

export default class GoBackToMain extends React.PureComponent {
  render() {
    const { onPress } = this.props;
    return (
      <>
        <View style={styles.topLeft}>
          <TouchableOpacity onPress={onPress}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topMiddle}>
          <Text style={styles.title}>Settings </Text>
        </View>
        <View style={styles.topRight} />
      </>
    );
  }
}
GoBackToMain.propTypes = {
  onPress: PropTypes.func.isRequired,
};
