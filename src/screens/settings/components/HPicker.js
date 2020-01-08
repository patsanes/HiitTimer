import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'HiitTimer/src/components/Icons';
import { fontSizes, colors } from 'HiitTimer/src/utils/theme';
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
            underlayColor={colors.transparent}
            onPress={() => {
              this.setModalVisible(true);
            }}
            style={styles.touch}
          >
            <View style={styles.valueContainer}>
              <Icons name={placeholder} />
              <Text style={styles.headerValue}>{placeholder}</Text>
              <Text style={styles.value}>{selectedValue} s </Text>
            </View>
          </TouchableHighlight>
        </View>
        {!isVisiblePicker ? (
          <HModal
            onValueChange={onValueChange}
            modalVisible={modalVisible}
            togglePicker={this.togglePicker}
            items={items}
            placeholder={placeholder}
          ></HModal>
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
