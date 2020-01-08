import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { ButtonTimer } from 'HiitTimer/src/components';

const styles = StyleSheet.create({
  container: { display: 'flex', flex: 1, flexDirection: 'row' },
  left: {
    flex: 3,
    borderColor: 'green',
  },
  center: {
    flex: 4,
    borderColor: 'red',
  },
  right: {
    flex: 3,
    borderColor: 'green',
  },
});
export default class PlayPause extends React.PureComponent {
  render() {
    const { isPlay, onPlay, onPause, onStop, setInProgress } = this.props;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.left} />
          <View style={styles.center}>
            <ButtonTimer
              disabled={false}
              name={isPlay ? 'pause' : 'play'}
              onPress={isPlay ? onPause : onPlay}
            />
          </View>
          <View style={styles.right}>
            <ButtonTimer
              disabled={!isPlay}
              name="stop"
              onPress={onStop}
              setInProgress={setInProgress}
            />
          </View>
        </View>
      </>
    );
  }
}

PlayPause.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
};
