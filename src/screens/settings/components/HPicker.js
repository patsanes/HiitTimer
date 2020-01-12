import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'HiitTimer/src/components/Icons';
import { fontSizes, colors, fontFamilies } from 'HiitTimer/src/utils/theme';
import HModal from './HModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  valueContainer: {
    flexDirection: 'row',
  },
  headerValue: {
    fontSize: fontSizes.xxSmall,
    fontFamily: fontFamilies.montserrat,
    flex: 0.6,
  },
  value: {
    fontSize: fontSizes.xxSmall,
    color: colors.secondary,
    flex: 0.4,
    textAlign: 'right',
    marginRight: 8,
  },
  containerParent: {
    height: 30,
    borderColor: colors.secondaryLight,
    borderWidth: 0.2,
  },
});

const HPicker = props => {
  const [isVisiblePicker, setIsVisiblePicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const togglePicker = () => {
    setIsVisiblePicker(!isVisiblePicker);
    setModalVisible(isVisiblePicker);
  };

  const { iconName, placeholder, selectedValue, onValueChange, items } = props;
  return (
    <View style={styles.containerParent}>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={colors.transparent}
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.touch}
        >
          <View style={styles.valueContainer}>
            <Icons name={iconName} />
            <Text style={styles.headerValue}>{placeholder}</Text>
            <Text style={styles.value}>{selectedValue} s </Text>
          </View>
        </TouchableHighlight>
      </View>
      {!isVisiblePicker ? (
        <HModal
          onValueChange={onValueChange}
          modalVisible={modalVisible}
          togglePicker={togglePicker}
          items={items}
          placeholder={placeholder}
        ></HModal>
      ) : null}
    </View>
  );
};
export default HPicker;

HPicker.propTypes = {
  iconName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired, // [1,2,3,4,5,67,7]
};
