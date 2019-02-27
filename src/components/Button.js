import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});

const ButtonTimer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Timer working</Text>
      <Button title="Timer" color="#841590" />
    </View>
  );
};
export default ButtonTimer;
