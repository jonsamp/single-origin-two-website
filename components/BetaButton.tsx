import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type from '../constants/type';
import colors from '../constants/colors';

interface BetaButtonProps {}

function BetaButton(props: BetaButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {}}
      accessibilityTraits="button"
      accessibilityComponentType="button"
      activeOpacity={0.6}
    >
      <View style={styles.iconContainer}>
        <Text style={[type.headline, styles.iconText]}></Text>
      </View>
      <Text style={[type.headline, styles.buttonText]}>Join the iOS beta</Text>
    </TouchableOpacity>
  );
}

export default BetaButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.primary,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    paddingRight: 10,
    paddingTop: 10,
    borderRightWidth: 1,
    borderRightColor: colors.light.black,
  },
  iconText: {
    color: colors.light.foreground,
    fontSize: 24,
  },
  buttonText: {
    padding: 12,
    color: colors.light.foreground,
    fontWeight: '900',
    marginRight: 16,
  },
});
