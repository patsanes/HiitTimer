import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { PlayPause } from '../components';

class PlayPauseContainer extends React.Component {
  _onPlay = () => {
    const {
      session: { setPlay, inProgress },
      onPress,
    } = this.props;
    if (inProgress) {
      setPlay();
    } else {
      onPress();
    }
  };

  render() {
    const { session } = this.props;
    return (
      <PlayPause
        isPlay={session.isPlay}
        onPlay={this._onPlay}
        onPause={session.setPause}
        onStop={session.setStop}
        setInProgress={session.setInProgress}
      />
    );
  }
}

PlayPauseContainer.propTypes = {
  session: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default inject('session')(observer(PlayPauseContainer));
