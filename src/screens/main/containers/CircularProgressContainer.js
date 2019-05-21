import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { CircularProgress } from '../components';

class CircularProgressContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { training, rest, isRest } = session;

    const count = isRest ? rest : training;
    return <CircularProgress count={count} />;
  }
}

CircularProgressContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(CircularProgressContainer));
