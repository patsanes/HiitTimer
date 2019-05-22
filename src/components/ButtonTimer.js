import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'powderblue',
    borderWidth: 3,
    color: 'white',
    overflow: 'hidden',
    height: 110,
    width: 110,
    borderRadius: 60,
  },
  buttonActive: {
    backgroundColor: 'skyblue',
  },
  buttonInactive: {
    backgroundColor: 'grey',
  },
  icon: {
    alignSelf: 'center',
  },
});

const ButtonTimer = props => {
  const { name, onPress, disabled } = props;
  const params = {
    style: [styles.button, disabled ? styles.buttonInactive : styles.buttonActive],
    onPress,
    disabled,
    // hide,
  };
  // if (hide) {
  // return null;
  // }
  return (
    <TouchableOpacity {...params}>
      <Icon name={name} size={40} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
};

ButtonTimer.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  // hide: PropTypes.bool.isRequired,
};

export default ButtonTimer;
