import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerSerieContainer = observer(() => {
  const { session } = useStores();
  const { updateSerie, serie } = session;
  const items = Array.from({ length: 10 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconSerieLabel}
      placeholder={I18N.serieLabel}
      selectedValue={serie.toString()}
      onValueChange={updateSerie}
      items={items}
    />
  );
});

export default PickerSerieContainer;
