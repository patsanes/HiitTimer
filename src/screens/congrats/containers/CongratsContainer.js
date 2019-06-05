import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { observer, inject } from 'mobx-react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { Congrats } from '../components';

momentDurationFormatSetup(moment);

class CongratsContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { endTime } = session;
    return (
      <View>
        <Congrats />
        <Text>Tiempo completo de entrenamiento: {endTime}.</Text>
      </View>
    );
  }
}

CongratsContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CongratsContainer));
