import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icons from '../../../utils/Icons';
// import { goToHome } from '../../../navigation/actions';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
    fontFamily: 'League Gothic',
    color: 'white',
  },
  titleCard: {
    color: 'white',
  },
  text: {
    fontSize: 25,
    fontFamily: 'League Gothic',
    color: 'white',
  },
  card: {
    backgroundColor: 'black',
  },
  container: {
    // borderWidth: 2,
    // borderColor: 'green',
  },
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
        <Text style={styles.titleText}>
          You have completed a session of {cycle} cycles with {serie} series in {endTime} time.
        </Text>
        <Card containerStyle={styles.card} title="DETAIL" titleStyle={styles.titleCard}>
          {details.map((item, index) => (
            <View key={item.name} label={item} value={item} style={styles.card}>
              <Text key={index.id} style={styles.text}>
                <Icons name={item.name} /> {item.name}: {item.data}
              </Text>
            </View>
          ))}
        </Card>
        <View>{/* <Button title="Go back" type="clear" onPress={onPress} /> */}</View>
      </View>
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
