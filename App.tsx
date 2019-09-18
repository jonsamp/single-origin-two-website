import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import colors from './constants/colors';
import { height } from './constants/layout';
import type from './constants/type';
import AppIcon from './assets/icon.png';
import BetaButton from './components/BetaButton';
import Item from './components/Item';

// feature images
import PulsePour from './assets/pulse-pour.gif';
import DarkMode from './assets/dark-mode.png';
import Iced from './assets/iced.png';
import Suggestions from './assets/suggestions.png';

const MEDIUM_WIDTH = 790;
const SMALL_WIDTH = 500;

export default class App extends Component {
  windowDimensions;
  state = {
    isSmallScreen: Dimensions.get('window').width < SMALL_WIDTH,
    isMediumScreen: Dimensions.get('window').width < MEDIUM_WIDTH,
  };
  componentDidMount() {
    this.windowDimensions = Dimensions.addEventListener('change', r => {
      if (r.window.width < SMALL_WIDTH && !this.state.isSmallScreen) {
        this.setState({ isSmallScreen: true });
      } else if (r.window.width >= SMALL_WIDTH && this.state.isSmallScreen) {
        this.setState({ isSmallScreen: false });
      }

      if (r.window.width < MEDIUM_WIDTH && !this.state.isMediumScreen) {
        this.setState({ isMediumScreen: true });
      } else if (r.window.width >= MEDIUM_WIDTH && this.state.isMediumScreen) {
        this.setState({ isMediumScreen: false });
      }
    });
  }
  render() {
    const { isSmallScreen, isMediumScreen } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View
            style={[
              styles.displayHorizontal,
              isSmallScreen && styles.headerSmallScreen,
            ]}
          >
            <Image
              source={AppIcon}
              style={[
                styles.appIcon,
                isSmallScreen && { marginRight: 0, marginBottom: 24 },
              ]}
            />
            <View style={{ minWidth: 200 }}>
              <Text
                style={[
                  type.largeTitle,
                  isSmallScreen && { textAlign: 'center' },
                ]}
              >
                Single Origin 2
              </Text>
              <Text
                style={[
                  type.body,
                  { marginTop: 8, marginBottom: 24 },
                  isSmallScreen && { textAlign: 'center' },
                ]}
              >
                Learn to brew specialty coffee.
              </Text>
              <BetaButton />
            </View>
          </View>
        </View>
        <View style={[styles.section, styles.darkSection]}>
          <View
            style={[
              !isSmallScreen && !isMediumScreen && styles.displayHorizontal,
              isSmallScreen || isMediumScreen ? { flex: 1 } : { width: 790 },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Item
                image={PulsePour}
                title="Pulse pouring"
                description="Pour in steps as your coffee brews to get the perfect balance of sour, sweet, and bitter notes."
                featureImage
              />
            </View>
            <View style={{ flex: 1 }}>
              <Item
                image={Iced}
                title="Iced recipes"
                description="Every pour over includes recipes for iced versions."
              />
              <Item
                title="Tasting notifications"
                description="Get a notification to taste your coffee once it has cooled. Tapping the notification takes you straight to a quick rating card."
              />
            </View>
          </View>
          <View
            style={[
              !isSmallScreen && !isMediumScreen && styles.displayHorizontal,
              isSmallScreen || isMediumScreen ? { flex: 1 } : { width: 790 },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Item
                image={DarkMode}
                title="Dark mode"
                description="Easily brew all night with dark mode."
              />
              <Item
                title="Rate your brew"
                description="Add tasting notes, an overall rating, and notes to each brew."
              />
            </View>
            <View style={{ flex: 1 }}>
              <Item
                image={Suggestions}
                title="Smart suggestions"
                description="Once you rate your brew, you'll see a suggestion of how to improve next time."
                featureImage
              />
            </View>
          </View>
          <View
            style={[
              !isSmallScreen && !isMediumScreen && styles.displayHorizontal,
              isSmallScreen || isMediumScreen ? { flex: 1 } : { width: 790 },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Item
                title="More recipes"
                description="Now serving Chemex, Chemex 3 Cup, Clever, Kalita Wave 185, Kalita Wave 155, V60, V60 #01 "
              />
              <Item
                title="Choose your grinder"
                description="Choose your grinder to record grind settings."
              />
            </View>
            <View style={{ flex: 1 }}>
              <Item
                title="More units"
                description="Granularly define units in grams, ounces, or measuring cups. Farenheit and Celsius also supported."
              />
              <Item
                title="Rewritten from scratch"
                description="Single Origin 2 is a complete rebuild of Single Origin. It's faster, stronger, and pours better coffee."
              />
            </View>
          </View>
        </View>
        <View style={[styles.section, styles.footer]}>
          <BetaButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    minHeight: height / 3,
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.grey1,
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
  headerSmallScreen: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  darkSection: {
    backgroundColor: colors.dark.background,
  },
  footer: {
    backgroundColor: colors.dark.grey1,
  },
});
