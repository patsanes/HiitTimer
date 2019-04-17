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
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  valueContainer: {
    flexDirection: 'row',
  },
  headerValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 0.6,
    justifyContent: 'space-around',
  },
  value: {
    fontSize: 18,
    color: 'grey',
    flex: 0.4,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
  },
  modalContent: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'transparent',
  },
  inner: {
    opacity: 0.95,
    backgroundColor: 'grey',
    borderRadius: 20,
    borderWidth: 1,
  },
  icon: {
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
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
      <View style={{ height: '8%' }}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this._togglePicker}
            onPress={() => {
              this._togglePicker;
              this.setModalVisible(true);
            }}
          >
            <View style={styles.valueContainer}>
              <Text style={styles.headerValue}>{placeholder}</Text>
              <Text style={styles.value}>{selectedValue}</Text>
            </View>
          </TouchableHighlight>
        </View>
        {!isVisiblePicker ? (
          <Modal animationType="slide" transparent visible={this.state.modalVisible}>
            <View style={styles.modalContent}>
              <View style={styles.inner}>
                <TouchableOpacity>
                  <Icon
                    name="chevron-up"
                    size={30}
                    color="white"
                    style={styles.icon}
                    onPress={this._togglePicker}
                  />
                  <Text style={styles.modalTitle}>{placeholder}</Text>
                </TouchableOpacity>
                <View style={styles.border} />
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
