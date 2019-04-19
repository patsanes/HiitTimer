import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { observer, inject } from 'mobx-react';

class CompleteWorkoutContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { endTime } = session;

    return (
      <View>
        <Text>Tiempo completo de entrenamiento: {endTime}</Text>
      </View>
    );
  }
}

CompleteWorkoutContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CompleteWorkoutContainer));
