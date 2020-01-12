import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { ButtonTimer } from 'HiitTimer/src/components';
import { colors } from 'HiitTimer/src/utils/theme';

import I18N from 'HiitTimer/src/lenguage';

const styles = StyleSheet.create({
  container: { display: 'flex', flex: 1, flexDirection: 'row' },
  left: {
    flex: 3,
  },
  center: {
    flex: 4,
  },
  right: {
    flex: 3,
  },
});

const PlayPause = props => {
  const { isPlay, onPlay, onPause, onStop, setInProgress } = props;
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
            name={I18N.stopLabel}
            onPress={onStop}
            setInProgress={setInProgress}
          />
        </View>
      </View>
    </>
  );
};

export default PlayPause;

PlayPause.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
};
