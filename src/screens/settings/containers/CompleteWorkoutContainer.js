import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import I18N from 'HiitTimer/src/lenguage';
import { observer, inject } from 'mobx-react';

class CompleteWorkoutContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { endTime } = session;
    return (
      <View>
        <Text>
          {I18N.completeWorkoutTime}
          {endTime}.
        </Text>
      </View>
    );
  }
}

CompleteWorkoutContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CompleteWorkoutContainer));
