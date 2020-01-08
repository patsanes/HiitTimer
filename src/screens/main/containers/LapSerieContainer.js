import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';

import { Lap } from '../components';

const LapSerieContainer = observer(() => {
  const { session } = useStores();
  const { currentSerie, serie } = session;
  return <Lap name={I18N.seriesLabel} count={serie} current={currentSerie} />;
});

export default LapSerieContainer;
