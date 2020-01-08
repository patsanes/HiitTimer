import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { PlayPause } from '../components';

const PlayPauseContainer = props => {
  const onPlay = () => {
    const {
      session: { setPlay, inProgress },
      onPress,
    } = props;
    if (inProgress) {
      setPlay();
    } else {
      onPress();
    }
  };
  const { session } = props;
  return (
    <PlayPause
      isPlay={session.isPlay}
      onPlay={onPlay}
      onPause={session.setPause}
      onStop={session.setStop}
      setInProgress={session.setInProgress}
    />
  );
};
// class PlayPauseContainer extends React.Component {
//   onPlay = () => {
//     const {
//       session: { setPlay, inProgress },
//       onPress,
//     } = this.props;
//     if (inProgress) {
//       setPlay();
//     } else {
//       onPress();
//     }
//   };

//   render() {
//     const { session } = this.props;
//     return (
//       <PlayPause
//         isPlay={session.isPlay}
//         onPlay={this.onPlay}
//         onPause={session.setPause}
//         onStop={session.setStop}
//         setInProgress={session.setInProgress}
//       />
//     );
//   }
// }

PlayPauseContainer.propTypes = {
  session: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default inject('session')(observer(PlayPauseContainer));
