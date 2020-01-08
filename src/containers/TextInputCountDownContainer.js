import React from 'react';
import { observer } from 'mobx-react';
import { UselessTextInput } from 'HiitTimer/src/components';
import { useStores } from 'HiitTimer/src/stores/hooks';

const TextInputCountDownContainer = observer(() => {
  const { session } = useStores();
  const { updateTraining, training } = session;
  return <UselessTextInput placeholder="Countdown" value={training} onChange={updateTraining} />;
});

export default TextInputCountDownContainer;
