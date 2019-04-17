import React, { Component } from 'react';
import {
  Modal,
  TouchableHighlight,
  Picker,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import ButtonTimer from './ButtonTimer';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
  },
  modalContent: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'transparent',
  },
  inner: {
    opacity: 0.95,
    backgroundColor: 'grey',
  },
});

export default class HPicker extends Component {
  state = {
    isVisiblePicker: false,
    modalVisible: false,
  };
  _togglePicker = () => {
    const { isVisiblePicker } = this.state;
    this.setState({ isVisiblePicker: !isVisiblePicker });
    this.setModalVisible(isVisiblePicker);
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  openModal() {
    this.setState({ modalVisible: true });
  }
  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { placeholder, selectedValue, onValueChange, items } = this.props;
    const { isVisiblePicker } = this.state;

    return (
      <View style={{ height: '30%' }}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this._togglePicker}
            onPress={() => {
              this._togglePicker;
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.text}>{placeholder}</Text>
          </TouchableHighlight>
        </View>
        {!isVisiblePicker ? (
          <Modal animationType="slide" transparent visible={this.state.modalVisible}>
            <View style={styles.modalContent}>
              <View style={styles.inner}>
                <TouchableOpacity style={styles.textContainer}>
                  <Button style={styles.text} title="Done" onPress={this._togglePicker} />
                </TouchableOpacity>
                <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
                  {items.map(item => (
                    <Picker.Item label={item} value={item} />
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
