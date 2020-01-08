import React from 'react';
import { View, Text } from 'react-native';
import I18N from 'HiitTimer/src/lenguage';
import { observer } from 'mobx-react';
import { useStores } from 'HiitTimer/src/stores/hooks';

const CompleteWorkoutContainer = observer(() => {
  const { session } = useStores;
  const { endTime } = session;
  return (
    <View>
      <Text>
        {I18N.completeWorkoutTime}
        {endTime}.
      </Text>
    </View>
  );
});

export default CompleteWorkoutContainer;
