import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';

import { Lap } from '../components';

class LapCycleContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { currentCycle, cycle } = session;
    return <Lap name={I18N.cyclesLabel} count={cycle} current={currentCycle} />;
  }
}

LapCycleContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(LapCycleContainer));
