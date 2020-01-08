import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerRestBetweenCyclesContainer = observer(() => {
  const { session } = useStores();
  const { updateRestBetween, restBetween } = session;
  const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconRestBetweenLabel}
      placeholder={I18N.restBetweenCyclesLabel}
      selectedValue={restBetween.toString()}
      onValueChange={updateRestBetween}
      items={items}
    />
  );
});

export default PickerRestBetweenCyclesContainer;
