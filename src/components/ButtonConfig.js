import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fontSizes } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 80,
    width: 80,
  },
  icon: {
    alignSelf: 'center',
  },
});

const ButtonConfig = props => {
  const { name, onPress } = props;
  const params = {
    style: [styles.button],
    onPress,
  };
  return (
    <TouchableOpacity {...params}>
      <Icon name={name} size={fontSizes.xlarge} color={colors.secondaryDark} style={styles.icon} />
    </TouchableOpacity>
  );
};

ButtonConfig.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonConfig;
