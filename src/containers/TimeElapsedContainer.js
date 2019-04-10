import React from 'react';
import { observer, inject } from 'mobx-react';

import { TimeElapsed } from '../components';

class TimeElapsedContainer extends React.Component {
  render() {
    const { isPlay } = this.props.session;
    return <TimeElapsed isPlay={isPlay} />;
  }
}

export default inject('session')(observer(TimeElapsedContainer));
