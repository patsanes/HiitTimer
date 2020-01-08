import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';
import I18N from 'HiitTimer/src/lenguage';
import { HPicker } from '../components';

const PickerTrainingContainer = observer(() => {
  const { session } = useStores();

  const { updateTraining, training } = session;
  const items = Array.from({ length: 60 }, (v, i) => (i + 1).toString());
  return (
    <HPicker
      iconName={I18N.iconCountdownLabel}
      placeholder={I18N.countdownLabel}
      selectedValue={training.toString()}
      onValueChange={updateTraining}
      items={items}
    />
  );
});

export default PickerTrainingContainer;
