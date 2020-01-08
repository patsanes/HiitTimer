import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import I18N from 'HiitTimer/src/lenguage';

import { Lap } from '../components';

const LapCycleContainer = props => {
  const { session } = props;
  const { currentCycle, cycle } = session;
  return <Lap name={I18N.cyclesLabel} count={cycle} current={currentCycle} />;
};

LapCycleContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

// TODO: See this how to use it in the new version of mobx
export default inject('session')(observer(LapCycleContainer));
