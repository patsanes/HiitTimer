import { StyleSheet } from 'react-native';

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
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    flex: 4.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default styles;
