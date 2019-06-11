import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    // borderColor: '#0f0c29',
    borderWidth: 3,
    color: 'white',
    overflow: 'hidden',
    height: 110,
    width: 110,
    borderRadius: 60,
  },
  icon: {
    alignSelf: 'center',
  },
});

const ButtonTimer = props => {
  const { name, onPress, disabled } = props;
  const params = {
    onPress,
    disabled,
  };
  const backgroundColors = !disabled ? ['#11998e', '#11998e'] : ['#232526', '#414345'];

  return (
    <TouchableOpacity {...params}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5]}
        colors={backgroundColors}
        style={styles.linearGradient}
      >
        <Icon name={name} size={40} color="white" style={styles.icon} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

ButtonTimer.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ButtonTimer;
