import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';

import { HPicker } from '../components';

const PickerCycleContainer = observer(() => {
  const { session } = useStores();
  const { updateCycle, cycle } = session;
  const items = Array.from({ length: 20 }, (v, i) => i + 1);
  return (
    <HPicker
      iconName={I18N.iconCycleLabel}
      placeholder={I18N.cycleLabel}
      selectedValue={cycle}
      onValueChange={updateCycle}
      items={items}
    />
  );
});

export default PickerCycleContainer;
