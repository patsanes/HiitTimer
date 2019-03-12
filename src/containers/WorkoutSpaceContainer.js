import React from "react";
// import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

// import ButtonTimer from "./Button";
import WorkoutSpace from "../components/WorkoutSpace";

class WorkoutSpaceContainer extends React.Component {
  render() {
    const { session } = this.props;
    console.log(session.endTime);
    return <WorkoutSpace prueba={session.isPlay} />;
  }
}

export default inject("session")(observer(WorkoutSpaceContainer));
