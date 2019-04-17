import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { UselessTextInput } from '../components';

class TextInputCountDownContainer extends React.Component {
  render() {
    const { session } = this.props;
    const { updateTraining, training } = session;
    return (
      <UselessTextInput
        placeholder="CountDown"
        value={training}
        // onChange={newvalue => updateTraining(newvalue)}
        onChange={updateTraining}
      />
    );
  }
}

TextInputCountDownContainer.propTypes = {
  session: PropTypes.object.isRequired,
};

export default inject('session')(observer(TextInputCountDownContainer));
