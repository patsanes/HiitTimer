import React from 'react';
// import PropTypes from "prop-types";
import { observer, inject } from 'mobx-react';

import { Lap } from '../components';

class LapCycleContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { currentCycle, cycle } = session;

    return <Lap name="Cycles" count={cycle} current={currentCycle} />;
  }
}

export default inject('session')(observer(LapCycleContainer));
