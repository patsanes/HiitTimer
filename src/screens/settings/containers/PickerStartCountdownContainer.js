import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerStartCountdownContainer = observer(() => {
  const { session } = useStores();
  const { updateStartCountdown, startCountdown } = session;
  const items = Array.from({ length: 10 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconStartCoundownLabel}
      placeholder={I18N.startCoundownLabel}
      selectedValue={startCountdown.toString()}
      onValueChange={updateStartCountdown}
      items={items}
    />
  );
});

export default PickerStartCountdownContainer;
