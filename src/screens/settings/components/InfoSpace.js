import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { colors, fontSizes, space } from '../../../utils/theme';

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondaryDark,
    height: space.xxLarge,
    width: space.xxLarge,
    borderRadius: space.xxLarge / 2,
    borderWidth: space.xxSmall,
    marginBottom: space.xSmall,
  },
});

const InfoSpace = () => {
  return (
    <React.Fragment>
      <View style={styles.iconContainer}>
        <Icon name="info" size={fontSizes.xSmall} color={colors.secondaryDark} />
      </View>
      <Text>
        Pequenez lo lo abonados en el zorrilla contento. Paz sus pueblo ocioso restos dia caidas
        una. El voluntad amenazas un debieran so. Del adulterio tio amenazaba templados aca
        envolvian. Le adulterino abofeteado un te reintegrar levantarse. Con gente suo fuego veces
        pecho comia puede.
      </Text>
    </React.Fragment>
  );
};
export default InfoSpace;
