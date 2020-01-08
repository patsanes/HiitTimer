import React, { Component } from 'react';
import { Modal, Picker, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'HiitTimer/src/components/Icons';
import { fontSizes, colors, fontWeight, space } from 'HiitTimer/src/utils/theme';

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: colors.secondaryDark,
    opacity: 0.8,
    alignContent: 'center',
  },
  inner: {
    opacity: 0.98,
    backgroundColor: colors.secondaryLight,
    borderRadius: space.xLarge,
  },
  modalTitle: {
    alignItems: 'center',
  },
  modalTitleText: {
    fontSize: fontSizes.small,
    fontWeight: fontWeight.bold,
    alignSelf: 'center',
  },
});

export default class HPicker extends Component {
  render() {
    const {
      modalVisible,
      togglePicker,
      placeholder,
      selectedValue,
      onValueChange,
      items,
    } = this.props;

    return (
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.inner}>
            <TouchableOpacity onPress={togglePicker} style={styles.modalTitle}>
              <Icons name="chevron" size={30} />
              <Text style={styles.modalTitleText}>{placeholder}</Text>
            </TouchableOpacity>
            <View style={styles.border} />
            <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
              {items.map((item, index) => (
                <Picker.Item key={index.id} label={item} value={item} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    );
  }
}

HPicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  togglePicker: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired, // [1,2,3,4,5,67,7]
};
