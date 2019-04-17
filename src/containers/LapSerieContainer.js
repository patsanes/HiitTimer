import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { Lap } from '../components';

class LapSerieContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { currentSerie, serie } = session;
    return <Lap name="Series" count={serie} current={currentSerie} />;
  }
}

LapSerieContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(LapSerieContainer));