import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
  CountdownContainer,
  LapCycleContainer,
  LapSerieContainer,
  TimeElapsedContainer,
} from '../containers';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
  },
  middleTop: {
    flex: 5,
    justifyContent: 'flex-end',
  },
  middleMiddle: {
    flex: 1,
    flexDirection: 'row',
  },
  middleBottom: {
    flex: 4,
  },
});

const Timer = props => {
  const { goToCongratsFromHome } = props;
  return (
    <View style={styles.container}>
      <View style={styles.middleTop}>
        <CountdownContainer goToCongratsFromHome={goToCongratsFromHome} />
      </View>
      <View style={styles.middleMiddle}>
        <LapSerieContainer />
        <LapCycleContainer />
      </View>
      <View style={styles.middleBottom}>
        <TimeElapsedContainer />
      </View>
    </View>
  );
};
Timer.propTypes = {
  goToCongratsFromHome: PropTypes.func.isRequired,
};

export default Timer;
