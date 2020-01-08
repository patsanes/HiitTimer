import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerRestContainer = observer(() => {
  const { session } = useStores();
  const { updateRest, rest } = session;
  const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconRestLabel}
      placeholder={I18N.restLabel}
      selectedValue={rest.toString()}
      onValueChange={updateRest}
      items={items}
    />
  );
});

export default PickerRestContainer;
