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
import Icons from '../../../utils/Icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: 'grey',
  },
  valueContainer: {
    flexDirection: 'row',
  },
  headerValue: {
    fontSize: 16,
    color: 'white',
    flex: 0.45,
  },
  value: {
    fontSize: 16,
    color: 'grey',
    flex: 0.55,
    textAlign: 'right',
    marginRight: 8,
  },
  modalContent: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'grey',
    opacity: 0.8,
  },
  inner: {
    opacity: 0.98,
    backgroundColor: 'black',
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
  iconList: {
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
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

  render() {
    const { placeholder, selectedValue, onValueChange, items } = this.props;
    const { isVisiblePicker } = this.state;
    console.log(placeholder);

    return (
      <View style={{ height: 30 }}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this._togglePicker}
            onPress={() => {
              this._togglePicker;
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
                    <Picker.Item color="white" label={item} value={item} />
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
