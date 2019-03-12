import React from "react";
// import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

// import ButtonTimer from "./Button";
import PlayPause from "../components/PlayPause";

class PlayPauseContainer extends React.Component {
  render() {
    const { session } = this.props;
    // console.log(session);
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

export default inject("session")(observer(PlayPauseContainer));
