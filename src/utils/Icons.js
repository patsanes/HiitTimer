import React from 'react';
import { StyleSheet } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
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
const iconsSettings = {
  Countdown: { name: 'ios-fitness', Icon: IconIonicons },
  Rest: { name: 'rest', Icon: IconAntDesign },
  Cycle: { name: 'cycle', Icon: IconEntypo },
  Serie: { name: 'spinner', Icon: IconFontAwesome },
  'Rest between cycles': { name: 'ios-timer', Icon: IconIonicons },
  'Start countdown': { name: 'stopwatch', Icon: IconEntypo },
};
const Icons = ({ name: iconName }) => {
  const { name, Icon } = iconsSettings[iconName];
  return <Icon name={name} size={16} color="white" style={styles.iconList} />;
};

Icons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icons;
