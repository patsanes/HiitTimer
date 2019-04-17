import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  container: {
    flexDirection: 'row',
  },
});

export default class UselessTextInput extends Component {
  render() {
    const { placeholder, onChange, value } = this.props;
    console.log({ placeholder, onChange, value });

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
