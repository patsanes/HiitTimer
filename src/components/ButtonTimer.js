import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    overflow: 'hidden',
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  iconDisabled: {
    color: 'grey',
    alignSelf: 'center',
  },
  icon: {
    color: 'white',
    alignSelf: 'center',
  },
});

const ButtonTimer = props => {
  const { name, onPress, disabled } = props;
  const params = { style: styles.button, onPress, disabled };

  return (
    <TouchableOpacity {...params}>
      {name === 'stop' ? (
        <Icon name={name} size={40} style={disabled ? styles.iconDisabled : styles.icon} />
      ) : (
        <Icon name={name} size={100} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

ButtonTimer.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ButtonTimer;
