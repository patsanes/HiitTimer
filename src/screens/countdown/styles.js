import { StyleSheet } from 'react-native';
import { fontSizes, fontFamilies, colors, space, fontWeight } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  middle: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: space.large,
    paddingRight: space.large,
    borderRadius: space.xSmall,
  },
  titleText: {
    fontSize: fontSizes.xxxxLarge,
    position: 'absolute',
    fontFamily: fontFamilies.leagueGothic,
    fontWeight: fontWeight.bold,
    color: colors.neutral,
    alignSelf: 'center',
  },
});

export default styles;
