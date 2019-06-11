import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icons from '../../../utils/Icons';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontFamily: 'League Gothic',
    color: 'black',
  },
  titleCard: {
    color: 'white',
  },
  text: {
    fontSize: 20,
    fontFamily: 'League Gothic',
    color: 'white',
  },
  headerTitleStyle: {
    fontSize: 50,
    fontFamily: 'Permanent Marker',
    color: 'black',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'black',
  },
  container: {},
});

const Congrats = props => {
  const { training, rest, cycle, serie, endTime } = props;
  const details = [
    {
      name: 'Countdown',
      data: training,
    },
    {
      name: 'Rest',
      data: rest,
    },
    {
      name: 'Cycle',
      data: cycle,
    },
    {
      name: 'Serie',
      data: serie,
    },
  ];
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.headerTitleStyle}>Well done! </Text>
        <View>
          <Text style={styles.titleText}>
            You have completed a session of {cycle} cycles with {serie} series in {endTime} time.
          </Text>
        </View>
      </View>
      <Card containerStyle={styles.card} title="DETAIL" titleStyle={styles.titleCard}>
        {details.map((item, index) => (
          <View style={styles.card}>
            <View key={index.id} label={item} value={item}>
              <Text style={styles.text}>
                <Icons name={item.name} /> {item.name}: {item.data}
              </Text>
            </View>
          </View>
        ))}
      </Card>
    </React.Fragment>
  );
};

Congrats.propTypes = {
  training: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
  cycle: PropTypes.number.isRequired,
  serie: PropTypes.number.isRequired,
  endTime: PropTypes.string.isRequired,
};
export default Congrats;
