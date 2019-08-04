import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { fontSizes, colors, space } from '../utils/theme';

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xSmall,
    color: colors.secondaryDark,
    marginRight: space.medium,
  },
  textInput: {
    flex: 1,
    fontSize: fontSizes.xSmall,
    color: colors.secondaryDark,
  },
  container: {
    flexDirection: 'row',
  },
});

export default class UselessTextInput extends Component {
  render() {
    const { placeholder, onChange, value } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{placeholder}</Text>
        <TextInput onChangeText={onChange} value={value} style={styles.textInput} />
      </View>
    );
  }
}

UselessTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
