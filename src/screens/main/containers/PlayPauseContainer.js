import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { PlayPause } from '../components';
// import { goToCountdown } from '../../../navigation/actions';

class PlayPauseContainer extends React.Component {
  render() {
    const { session, onPress } = this.props;
    return (
      <PlayPause
        isPlay={session.isPlay}
        onPlay={session.setPlay} // go to countdown screen & there session.setPlay
        onPause={session.setPause}
        onStop={session.setStop}
        onPress={onPress}
      />
    );
  }
}

PlayPauseContainer.propTypes = {
  session: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default inject('session')(observer(PlayPauseContainer));
