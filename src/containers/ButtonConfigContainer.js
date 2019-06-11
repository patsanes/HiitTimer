import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { ButtonConfig } from '../components';
import { goToSettings } from '../navigation/actions';

class ButtonConfigContainer extends React.Component {
  render() {
    const { dispatch } = this.props;
    const onPressSettings = () => dispatch(goToSettings());

    return <ButtonConfig disabled={false} name="cog" onPress={onPressSettings} />;
  }
}

ButtonConfigContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default inject('session')(observer(ButtonConfigContainer));