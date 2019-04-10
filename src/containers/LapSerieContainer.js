import React from 'react';
// import PropTypes from "prop-types";
import { observer, inject } from 'mobx-react';

import { Lap } from '../components';

class LapSerieContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { currentSerie, serie } = session;
    console.log(currentSerie, serie);

    return <Lap name="Series" count={serie} current={currentSerie} />;
  }
}

export default inject('session')(observer(LapSerieContainer));
