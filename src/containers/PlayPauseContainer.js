import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

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

PlayPauseContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(PlayPauseContainer));
