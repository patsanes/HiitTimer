import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { TimeElapsed } from '../components';

class TimeElapsedContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { inProgress } = session;
    return <TimeElapsed inProgress={inProgress} />;
  }
}

TimeElapsedContainer.propTypes = {
  session: PropTypes.object.isRequired,
  // started: PropTypes.bool.isRequired,
};

export default inject('session')(observer(TimeElapsedContainer));
