import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Countdown } from '../components';

class CountdownContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { training, rest, isRest, isPlay, increaseSerie } = session;

    const count = isRest ? rest : training;
    return <Countdown count={count} isPlay={isPlay} increaseSerie={increaseSerie} />;
  }
}

CountdownContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CountdownContainer));
