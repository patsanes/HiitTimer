import React from 'react';
// import PropTypes from "prop-types";
import { observer, inject } from 'mobx-react';

// import ButtonTimer from "./Button";
import ConfigTraining from '../components/ConfigTraining';

class ConfigTrainingContainer extends React.Component {
  render() {
    const { session } = this.props;
    return <ConfigTraining />;
  }
}

export default inject('session')(observer(ConfigTrainingContainer));
