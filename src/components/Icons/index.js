import React from 'react';
import { StyleSheet } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import { colors, fontSizes, space } from 'HiitTimer/src/utils/theme';


const styles = StyleSheet.create({
  iconList: {
    width: space.xxLarge,
    textAlign: 'center',
  },
});

const iconsSettings = {
  Countdown: { name: 'ios-fitness', Icon: IconIonicons },
  Rest: { name: 'rest', Icon: IconAntDesign },
  Cycle: { name: 'cycle', Icon: IconEntypo },
  Serie: { name: 'spinner', Icon: IconFontAwesome },
  'Rest between cycles': { name: 'ios-timer', Icon: IconIonicons },
  'Start countdown': { name: 'stopwatch', Icon: IconEntypo },
  'chevron-up': { name: 'chevron-up', Icon: IconFontAwesome },
};

const Icons = ({ name: iconName, size: sizeIcon, color: colorIcon }) => {
  const { name, Icon } = iconsSettings[iconName];
  return <Icon name={name} size={sizeIcon} color={colorIcon} style={styles.iconList} />;
};

Icons.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};
Icons.defaultProps = {
  size: fontSizes.xxSmall,
  color: colors.secondaryDark,
};

export default Icons;
