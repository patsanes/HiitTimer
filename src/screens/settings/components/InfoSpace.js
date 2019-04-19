import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// import icoMoonConfig from '../../assets/fonts/CustomIconMoon/selection.json';

// console.log({ icoMoonConfig });

// const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'iconmoon.ttf');

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'powderblue',

    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 2,
  },
});

const InfoSpace = () => {
  return (
    <React.Fragment>
      <View style={styles.iconContainer}>
        <Icon name="info" size={20} color="powderblue" />
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
