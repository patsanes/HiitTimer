import React, { Component } from 'react';
import {
  Modal,
  TouchableHighlight,
  Picker,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icons from '../../../utils/Icons';
import { fontSizes, colors } from '../../../utils/theme';

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
    // color: 'white',
    flex: 0.45,
  },
  value: {
    fontSize: fontSizes.xxSmall,
    color: colors.secondary,
    flex: 0.55,
    textAlign: 'right',
    marginRight: 8,
  },
  modalContent: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: colors.secondary,
    opacity: 0.8,
  },
  inner: {
    opacity: 0.98,
    backgroundColor: colors.neutral,
    borderRadius: 20,
    borderWidth: 1,
  },
  modalTitle: {
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    // color: 'white',
    alignSelf: 'center',
  },
  containerParent: {
    height: 30,
    borderColor: 'magenta',
    borderWidth: 2,
  },
});

export default class HPicker extends Component {
  state = {
    isVisiblePicker: false,
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  togglePicker = () => {
    const { isVisiblePicker } = this.state;
    this.setState({ isVisiblePicker: !isVisiblePicker });
    this.setModalVisible(isVisiblePicker);
  };

  render() {
    const { placeholder, selectedValue, onValueChange, items } = this.props;
    const { isVisiblePicker, modalVisible } = this.state;

    return (
      <View style={styles.containerParent}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <View style={styles.valueContainer}>
              <Icons name={placeholder} />
              <Text style={styles.headerValue}>{placeholder}</Text>
              <Text style={styles.value}>{selectedValue} s </Text>
            </View>
          </TouchableHighlight>
        </View>
        {!isVisiblePicker ? (
          <Modal animationType="slide" transparent visible={modalVisible}>
            <View style={styles.modalContent}>
              <View style={styles.inner}>
                <TouchableOpacity onPress={this.togglePicker}>
                  <Icons name="chevron-up" size={30} />
                  <Text style={styles.modalTitle}>{placeholder}</Text>
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
        ) : null}
      </View>
    );
  }
}

HPicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired, // [1,2,3,4,5,67,7]
};
