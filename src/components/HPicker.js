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
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    // flex: 1,
    // borderWidth: 5,
    // borderColor: 'white',
    // width: '100%',
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
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { placeholder, selectedValue, onValueChange, items } = this.props;
    const { isVisiblePicker } = this.state;
    return (
      <View style={{ height: '30%', bottom: 1, marginTop: 22, backgroundColor: 'transparent' }}>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
          // presentationStyle="pageSheet"
        >
          <View style={{ backgroundColor: 'tomato' }}>
            <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
              {items.map(item => (
                <Picker.Item label={item} value={item} />
              ))}
            </Picker>
          </View>
        </Modal>

        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.text}>{placeholder}</Text>
          </TouchableHighlight>
          {/* <TouchableOpacity style={styles.textContainer} onPress={this._togglePicker}>
            <Text style={styles.text}>{placeholder}</Text>
            <Text style={styles.text}>{selectedValue}</Text>
          </TouchableOpacity> */}
          {isVisiblePicker ? (
            <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
              {items.map(item => (
                <Picker.Item label={item} value={item} />
              ))}
            </Picker>
          ) : null}
        </View>
      </View>
    );
    // return (
    //   <View style={styles.container}>
    //     <TouchableOpacity style={styles.textContainer} onPress={this._togglePicker}>
    //       <Text style={styles.text}>{placeholder}</Text>
    //       <Text style={styles.text}>{selectedValue}</Text>
    //     </TouchableOpacity>
    //     {isVisiblePicker ? (
    //       <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
    //         {items.map(item => (
    //           <Picker.Item label={item} value={item} />
    //         ))}
    //       </Picker>
    //     ) : null}
    //   </View>
    // );
  }
}

HPicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired, // [1,2,3,4,5,67,7]
};
