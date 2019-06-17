import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // borderColor: 'blue',
    // borderWidth: 3,
  },
  middle: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  bottom: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default styles;
