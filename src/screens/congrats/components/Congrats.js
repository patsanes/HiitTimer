import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icons from 'HiitTimer/src/utils/Icons';
import { fontSizes, fontFamilies, colors, space } from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    flex: 0.6,
  },
  containerText: {
    flex: 0.4,
    justifyContent: 'center',
    marginLeft: space.large,
    marginRight: space.large,
  },
  textCompletedIn: {
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.montserrat,
    color: colors.secondary,
  },
  titleCard: {
    color: colors.secondaryDark,
  },
  text: {
    fontSize: fontSizes.small,
    fontFamily: fontFamilies.leagueGothic,
    color: colors.secondaryDark,
  },
  card: {
    backgroundColor: colors.primaryDark,
    paddingBottom: space.xSmall,
    marginTop: space.xSmall,
  },
  cardItem: {
    paddingBottom: space.xSmall,
    marginTop: space.xSmall,
    flexDirection: 'row',
    alignItems: 'center',
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
        <View style={styles.containerCard}>
          <Card containerStyle={styles.card} title="DETAIL" titleStyle={styles.titleCard}>
            {details.map((item, index) => (
              <View key={item.name} label={item} value={item} style={styles.cardItem}>
                <Icons name={item.name} />
                <Text key={index.id} style={styles.text}>
                  {item.name}: {item.data}
                </Text>
              </View>
            ))}
          </Card>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textCompletedIn}>
            You have completed a session in {endTime} time.
          </Text>
        </View>
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
