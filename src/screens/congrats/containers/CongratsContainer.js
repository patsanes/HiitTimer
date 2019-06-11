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
    const { training, rest, cycle, serie, endTime } = session;

    return (
      <View>
        <Congrats training={training} rest={rest} cycle={cycle} serie={serie} endTime={endTime} />
      </View>
    );
  }
}

CongratsContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CongratsContainer));
