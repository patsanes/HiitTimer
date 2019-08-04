import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icons from '../../../utils/Icons';
import { fontSizes, fontFamilies, colors } from '../../../utils/theme';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
    fontFamily: fontFamilies.leagueGothic,
    color: colors.primaryLight,
  },
  titleCard: {
    color: colors.primaryLight,
  },
  text: {
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.leagueGothic,
    color: colors.primaryLight,
  },
  card: {
    backgroundColor: colors.neutral,
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
      <View>
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
