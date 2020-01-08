import React from 'react';
import PropTypes from 'prop-types';
import { ButtonConfig } from 'HiitTimer/src/components';
import { goToSettings } from 'HiitTimer/src/navigation/actions';

const ButtonConfigContainer = props => {
  const { dispatch } = props;
  const onPressSettings = () => dispatch(goToSettings());

  return <ButtonConfig disabled={false} name="cog" onPress={onPressSettings} />;
};

ButtonConfigContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default ButtonConfigContainer;
