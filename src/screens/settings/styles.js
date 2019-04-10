import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
  },
  top: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderWidth: 2,

    borderColor: 'black',
  },
  middle: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,

    borderColor: 'black',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default styles;
