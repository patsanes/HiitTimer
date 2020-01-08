import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import { PlayPause } from '../components';

const PlayPauseContainer = observer(props => {
  const { session } = useStores();
  const onPlay = () => {
    const { setPlay, inProgress } = session;
    const { onPress } = props;
    if (inProgress) {
      setPlay();
    } else {
      onPress();
    }
  };
  return (
    <PlayPause
      isPlay={session.isPlay}
      onPlay={onPlay}
      onPause={session.setPause}
      onStop={session.setStop}
      setInProgress={session.setInProgress}
    />
  );
});

PlayPauseContainer.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default PlayPauseContainer;
