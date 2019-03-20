import React from 'react';
// import PropTypes from "prop-types";
import { observer, inject } from 'mobx-react';

// import ButtonTimer from "./Button";
import Countdown from '../components/Countdown';

class CountdownContainer extends React.Component {
  render() {
    const { training, rest, isRest, isPlay, increaseSerie } = this.props.session;

    const count = isRest ? rest : training;
    return <Countdown count={count} isPlay={isPlay} increaseSerie={increaseSerie} />;
  }
}

export default inject('session')(observer(CountdownContainer));
