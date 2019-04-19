import React from 'react';
import PropTypes from 'prop-types';

import { ButtonTimer } from '../../../components';

export default class PlayPause extends React.PureComponent {
  render() {
    const { start, onPlay, onPause, stop } = this.props;
    return (
      <>
        <ButtonTimer
          disabled={false}
          name={start ? 'pause' : 'play'}
          onPress={start ? onPause : onPlay}
        />
        <ButtonTimer disabled={!start} name="stop" onPress={stop} />
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
