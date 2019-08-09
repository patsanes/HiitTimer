import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import { fontSizes, fontFamilies, colors } from '../../../utils/theme';

const styles = StyleSheet.create({
  baseText: {
    fontSize: fontSizes.xlarge,
    fontFamily: fontFamilies.leagueGothic,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.secondaryDark,
  },
});

const TimeElapsed = props => {
  const { isPlay, isStop } = props;
  const [count, setCount] = React.useState(0);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    let unMount;
    if (isPlay) {
      const onTick = () => {
        setCount(count + 1);
      };
      const timerID = setInterval(() => onTick(), 1000);

      unMount = () => {
        clearInterval(timerID);
      };
      return unMount;
    }
  }, [count, isPlay]);

  const now = moment();
  const then = moment().add(count, 'seconds');

  const countdown = !isStop ? moment.utc(then.diff(now)).format('mm:ss') : '00:00';

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>{countdown}</Text>
    </View>
  );
};

TimeElapsed.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  isStop: PropTypes.bool.isRequired,
};

TimeElapsed.defaultProps = {};

export default TimeElapsed;
