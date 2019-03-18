import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ButtonTimer from './Button';

const styles = StyleSheet.create({
  bottom: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'powderblue',
    backgroundColor: 'steelblue',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default class PlayPause extends React.PureComponent {
  render() {
    const { start, onPlay, onPause, stop } = this.props;
    return (
      <>
        <ButtonTimer
          style={styles.button}
          disabled={false}
          name={start ? 'pause' : 'play'}
          onPress={start ? onPause : onPlay}
        />
        <ButtonTimer style={styles.button} disabled={!start} name="stop" onPress={stop} />
      </>
    );
  }
}

PlayPause.propTypes = {
  start: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
};
