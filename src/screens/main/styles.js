import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // borderWidth: 5,
    // borderColor: 'green',
  },
  middle: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 5,
    // borderColor: 'red',
  },
  bottom: {
    flex: 3.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderWidth: 5,
    // borderColor: 'yellow',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default styles;
