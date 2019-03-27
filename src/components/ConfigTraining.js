import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import ButtonConfig from './ButtonConfig';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'powderblue',
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
    fontSize: 60,
    fontWeight: 'bold',
    color: 'powderblue',
    alignSelf: 'center',
  },
});

export default class ConfigTraining extends React.PureComponent {
  render() {
    return (
      <>
        <View style={styles.topLeft} />
        <View style={styles.topMiddle}>
          <Text style={styles.titleText}>HIIT</Text>
        </View>
        <View style={styles.topRight}>
          <ButtonConfig style={styles.button} disabled={false} name="cog" />
        </View>
      </>
    );
  }
}

ConfigTraining.propTypes = {};
