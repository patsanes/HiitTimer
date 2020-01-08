import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';
import { Lap } from '../components';

const LapCycleContainer = observer(() => {
  const { session } = useStores();
  const { currentCycle, cycle } = session;
  return <Lap name={I18N.cyclesLabel} count={cycle} current={currentCycle} />;
});

export default LapCycleContainer;
