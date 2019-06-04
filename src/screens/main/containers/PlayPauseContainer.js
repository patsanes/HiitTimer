import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { PlayPause } from '../components';

class PlayPauseContainer extends React.Component {
  render() {
    const { session, onPress } = this.props;
    return (
      <PlayPause
        inProgress={session.inProgress} // comenzo la cuenta regresiva
        isPlay={session.isPlay} // isPlay pasa a true
        onPlay={session.setPlay} // go to countdown screen & there session.setPlay
        onPause={session.setPause}
        onStop={session.setStop}
        onPress={onPress} // Para ir a countdown?
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
