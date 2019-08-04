import { StyleSheet } from 'react-native';
import { space } from '../../utils/theme';
// import { space } from 'HiitTimer/src/utils/theme';
// import { space } from 'src/utils/theme';

const styles = StyleSheet.create({
  top: {
    flex: 0.1,
    flexDirection: 'row',
    paddingLeft: space.small,
    paddingRight: space.small,
    borderColor: 'black',
    borderWidth: 2,
  },
  middle: {
    flex: 0.8,
    borderColor: 'blue',
    borderWidth: 2,
    alignContent: 'center',
  },
  bottom: {
    flex: 1,
    marginTop: space.medium,
    paddingLeft: space.small,
    paddingRight: space.small,
    borderColor: 'green',
    borderWidth: 2,
    alignContent: 'flex-end',
  },
  // linearGradient: {
  //   flex: 0.1,
  // },
  container: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 6,
  },
});

export default styles;
