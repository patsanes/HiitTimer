import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';

import { TimeElapsed } from '../components';

const TimeElapsedContainer = observer(() => {
  const { session } = useStores();
  const { isPlay, isStop } = session;
  return <TimeElapsed isPlay={isPlay} isStop={isStop} />;
});

export default TimeElapsedContainer;
