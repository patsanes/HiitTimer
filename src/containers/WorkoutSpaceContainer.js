import React from "react";
// import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

// import ButtonTimer from "./Button";
import WorkoutSpace from "../components/WorkoutSpace";

class WorkoutSpaceContainer extends React.Component {
  render() {
    const { session } = this.props;
    return (
      <WorkoutSpace
        serie={session.serie}
        cycle={session.cycle}
        training={session.training}
        rest={session.rest}
        isPlay={session.isPlay}
        isStop={session.isStop}
      />
    );
  }
}

export default inject("session")(observer(WorkoutSpaceContainer));
