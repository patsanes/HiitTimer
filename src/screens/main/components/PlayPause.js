import React from 'react';
import PropTypes from 'prop-types';

import { ButtonTimer } from '../../../components';

export default class PlayPause extends React.PureComponent {
  render() {
    const { isPlay, onPlay, onPause, onStop, onPress } = this.props;
    return (
      <>
        <ButtonTimer
          disabled={false}
          name={isPlay ? 'pause' : 'play'}
          onPress={onPress}
          // { isPlay ? (onPress = { isPlay? onPause: onPlay }) : (onPress = { onPress })}

          // onPress={isPlay ? onPause : onPlay}
          // && isPlay ? onPause : onPlay
        />
        <ButtonTimer disabled={!isPlay} name="stop" onPress={onStop} />
      </>
    );
  }
}

PlayPause.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};
