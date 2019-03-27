import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import ButtonConfig from './ButtonConfig';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    flexDirection: 'column',
  },
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
  titleText: {
    paddingHorizontal: 10,
    fontSize: 70,
    // fontWeight: 'bold',
    color: 'powderblue',
    alignSelf: 'center',
    fontFamily: 'Permanent Marker',
  },
});

export default class ConfigTraining extends React.PureComponent {
  render() {
    return (
      <>
        <View style={styles.topLeft} />
        <View style={styles.topMiddle}>
          <Text style={styles.titleText}>HIIT </Text>
        </View>
        <View style={styles.topRight}>
          <ButtonConfig style={styles.button} disabled={false} name="cog" />
        </View>
      </>
    );
  }
}

ConfigTraining.propTypes = {};
