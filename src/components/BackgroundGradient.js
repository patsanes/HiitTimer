import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
const BackgroundGradient = props => {
  const { children } = props;
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={['#d9a7c7', '#fffcdc']}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
};

BackgroundGradient.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundGradient;