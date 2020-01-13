import { StyleSheet } from 'react-native';
import { space, colors } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  middle: {
    flex: 4.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    flex: 5.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: space.large,
    paddingRight: space.large,
    borderRadius: space.xSmall,
  },
});

export default styles;
