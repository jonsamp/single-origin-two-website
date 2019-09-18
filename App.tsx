import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from './constants/colors';
import { height } from './constants/layout';
import type from './constants/type';
import AppIcon from './assets/icon.png';
import BetaButton from './components/BetaButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.displayHorizontal}>
          <Image source={AppIcon} style={styles.appIcon} />
          <View>
            <Text style={type.largeTitle}>Single Origin 2</Text>
            <Text style={[type.body, { marginVertical: 8 }]}>
              Learn to brew specialty coffee.
            </Text>
            <BetaButton />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  section: {
    minHeight: height / 3,
    padding: 60,
    justifyContent: 'center',
  },
  appIcon: {
    width: 100,
    height: 100,
    marginRight: 32,
    borderRadius: 12,
  },
  displayHorizontal: {
    flexDirection: 'row',
  },
});
