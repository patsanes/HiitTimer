import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 2,
    marginBottom: 5,
  },
});

const InfoSpace = () => {
  return (
    <React.Fragment>
      <View style={styles.iconContainer}>
        <Icon name="info" size={20} color="white" />
      </View>
      <Text>
        Pequenez lo lo abonados en el zorrilla contento. Paz sus pueblo ocioso restos dia caidas
        una. El voluntad amenazas un debieran so. Del adulterio tio amenazaba templados aca
        envolvian. Le adulterino abofeteado un te reintegrar levantarse. Con gente suo fuego veces
        pecho comia puede. Justicia oia entendia suo sus asi presento concebia hermanas estetica.
        Pano por dado algo mal baja tan fue.
      </Text>
    </React.Fragment>
  );
};
export default InfoSpace;
