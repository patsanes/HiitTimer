import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderColor: 'skyblue',
    borderWidth: 1,
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
  console.log(props);
  const { name } = props;
  return (
    <TouchableOpacity color="#841590" rounded="true" style={styles.button}>
      <Icon name={name} size={40} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
};

ButtonTimer.propTypes = {
  name: PropTypes.string.isRequired,
  test: PropTypes.string,
};

ButtonTimer.defaultProps = {
  test: 'pepe',
};

export default ButtonTimer;
