import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  top: {
    flex: 0.1,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
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
    marginTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
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
