import React from 'react';
import { observer, inject } from 'mobx-react';
import { PlayPause } from '../components';

class PlayPauseContainer extends React.Component {
  render() {
    const { session } = this.props;
    return (
      <PlayPause
        start={session.isPlay}
        onPlay={session.setPlay}
        onPause={session.setPause}
        stop={session.setStop}
      />
    );
  }
}

export default inject('session')(observer(PlayPauseContainer));
