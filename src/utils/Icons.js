import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  iconList: {
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
  },
});
export default class Icons extends React.Component {
  nested_Icons = name => {
    if (name == 'Countdown') {
      return <IconI name="ios-fitness" size={16} color="white" style={styles.iconList} />;
    }
    if (name == 'Rest') {
      return <IconA name="rest" size={16} color="white" style={styles.iconList} />;
    }
    if (name == 'Cycle') {
      return <IconE name="cycle" size={16} color="white" style={styles.iconList} />;
    }
    if (name == 'Serie') {
      return <Icon name="spinner" size={16} color="white" style={styles.iconList} />;
    }
    if (name == 'Rest between cycles') {
      return <IconI name="ios-timer" size={16} color="white" style={styles.iconList} />;
    }
    return <IconE name="stopwatch" size={16} color="white" style={styles.iconList} />;
  };
  render() {
    const { name } = this.props;
    return this.nested_Icons(name);
  }
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
};
