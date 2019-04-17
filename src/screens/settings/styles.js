import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'red',
  },
  blackSpace: {
    flex: 0.2,
  },
  middle: {
    flex: 8.8,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'green',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default styles;
