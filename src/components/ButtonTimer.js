import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fontSizes, space } from '../utils/theme';

const styles = StyleSheet.create({
  button: {
    paddingLeft: space.large,
    paddingRight: space.large,
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.secondaryDark,
    overflow: 'hidden',
    height: space.jumbo,
    width: space.jumbo,
    borderRadius: space.xxLarge * 2,
  },
  iconDisabled: {
    color: colors.secondary,
    alignSelf: 'center',
  },
  icon: {
    color: colors.secondaryDark,
    alignSelf: 'center',
  },
});

const ButtonTimer = props => {
  const { name, onPress, disabled } = props;
  const params = { style: styles.button, onPress, disabled };

  return (
    <TouchableOpacity {...params}>
      {name === 'stop' ? (
        <Icon
          name={name}
          size={fontSizes.xlarge}
          style={disabled ? styles.iconDisabled : styles.icon}
        />
      ) : (
        <Icon name={name} size={fontSizes.xxxLarge} style={styles.icon} />
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
