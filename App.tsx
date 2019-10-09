import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Video } from 'expo-av';
import colors from './constants/colors';
import { height } from './constants/layout';
import type from './constants/type';
import AppIcon from './assets/icon.png';
import AppStoreButton from './components/AppStoreButton';
import Item from './components/Item';
import PrivacyPolicy from './PrivacyPolicy';

// feature images
import PulsePour from './assets/pulse-pour.gif';
import DarkMode from './assets/dark-mode.png';
import Iced from './assets/iced.png';
import Suggestions from './assets/suggestions.png';

const MEDIUM_WIDTH = 790;
const SMALL_WIDTH = 500;
const twos = ['2', 'II', '✌️'];

export default class App extends Component {
  animatedValue = new Animated.Value(1);

  state = {
    isSmallScreen: Dimensions.get('window').width < SMALL_WIDTH,
    isMediumScreen: Dimensions.get('window').width < MEDIUM_WIDTH,
    due: '2',
    privacyPolicyVisible: false,
  };

  componentDidMount() {
    Dimensions.addEventListener('change', r => {
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

    setInterval(() => {
      const index = twos.findIndex(i => i === this.state.due);
      let nextIndex = index + 1;
      if (nextIndex >= twos.length) {
        nextIndex = 0;
      }

      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 0,
          duration: 400,
        }),
        {
          start: async onComplete => {
            await this.setState({ due: twos[nextIndex] });
            onComplete({ finished: true });
          },
          stop: () => {},
        },
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 400,
        }),
      ]).start();
    }, 2500);

    const containsPrivacy = Boolean(window.location.href.match('privacy'));
    if (containsPrivacy && !this.state.privacyPolicyVisible) {
      this.setPrivacyPolicy(true);
    }
  }

  setPrivacyPolicy = async value => {
    await this.setState({ privacyPolicyVisible: value });
    const containsPrivacy = Boolean(window.location.href.match('privacy'));
    if (!this.state.privacyPolicyVisible && containsPrivacy) {
      location.href = '/';
    }
    window.scrollTo(0, 0);
  };

  render() {
    const { isSmallScreen, isMediumScreen, privacyPolicyVisible } = this.state;
    if (privacyPolicyVisible) {
      return <PrivacyPolicy onBack={() => this.setPrivacyPolicy(false)} />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View
            style={[
              styles.displayHorizontal,
              {
                minHeight: height / 3.5,
                alignItems: 'center',
              },
            ]}
          >
            <View
              style={[
                styles.displayHorizontal,
                isSmallScreen && styles.headerSmallScreen,
                { flex: 1 },
              ]}
            >
              <Image
                source={AppIcon}
                style={[
                  styles.appIcon,
                  isSmallScreen && { marginRight: 0, marginBottom: 24 },
                ]}
              />
              <View
                style={[
                  { flex: 1 },
                  isSmallScreen && {
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                ]}
              >
                <View style={styles.displayHorizontal}>
                  <Text
                    style={[
                      type.largeTitle,
                      isSmallScreen && { textAlign: 'center' },
                    ]}
                  >
                    Single Origin{' '}
                  </Text>
                  <Animated.Text
                    style={[
                      type.largeTitle,
                      isSmallScreen && { textAlign: 'center' },
                      {
                        width: 32,
                        height: 40,
                        opacity: this.animatedValue,
                        transform: [
                          {
                            scale: this.animatedValue.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.8, 1],
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    {this.state.due}
                  </Animated.Text>
                </View>
                <Text
                  style={[
                    type.body,
                    { marginTop: 8, marginBottom: 24, maxWidth: 260 },
                    isSmallScreen && { textAlign: 'center' },
                  ]}
                >
                  Learn to brew specialty coffee, now on iPhone and iPad.
                </Text>
                <AppStoreButton />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.section, styles.primarySection]}>
          <Video
            source={{
              uri: 'https://singleoriginapp.s3.amazonaws.com/app-preview.mp4',
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            useNativeControls
            style={{ width: 280, height: 606, backgroundColor: 'black' }}
          />
        </View>
        <View
          style={[
            styles.section,
            styles.darkSection,
            isSmallScreen && { paddingVertical: 8 },
          ]}
        >
          <View
            style={[
              !isSmallScreen && !isMediumScreen && styles.displayHorizontal,
              isSmallScreen || isMediumScreen
                ? { flex: 1 }
                : { width: MEDIUM_WIDTH },
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
              isSmallScreen || isMediumScreen
                ? { flex: 1 }
                : { width: MEDIUM_WIDTH },
            ]}
          >
            <Item
              title="Brew without a scale"
              description="When pouring a pour over method, follow along with the pour animation on screen to get close to the correct ratios when you don't have a scale."
            />
          </View>
          <View
            style={[
              !isSmallScreen && !isMediumScreen && styles.displayHorizontal,
              isSmallScreen || isMediumScreen
                ? { flex: 1 }
                : { width: MEDIUM_WIDTH },
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
              isSmallScreen || isMediumScreen
                ? { flex: 1 }
                : { width: MEDIUM_WIDTH },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Item
                title="More recipes"
                description="Now brewing Aeropress, Beehouse, Chemex, Chemex 3 Cup, Clever, Eva Solo, French Press, Kalita Wave (185, 155), V60 (#02, #01)"
              />
              <Item
                title="Choose your grinder"
                description="Choose your grinder to record grind settings."
              />
            </View>
            <View style={{ flex: 1 }}>
              <Item
                title="More units"
                description="Granularly define units in grams, ounces, or measuring cups. Fahrenheit and Celsius also supported."
              />
              <Item
                title="Rewritten from scratch"
                description="Single Origin 2 is a complete rebuild of Single Origin. It's faster, stronger, and pours better coffee."
              />
            </View>
          </View>
        </View>
        <View style={[styles.section, styles.footer]}>
          <AppStoreButton />
        </View>
        <View
          style={[
            styles.section,
            styles.darkSection,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 32,
            },
          ]}
        >
          <View>
            <Text style={[type.body, { color: colors.dark.foreground }]}>
              Single Origin 2
            </Text>
            <Text style={[type.body, { color: colors.dark.foreground }]}>
              Copyright {new Date().getFullYear()}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.dark.foreground,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 4,
                marginBottom: 16,
              }}
              onPress={() => this.setPrivacyPolicy(true)}
            >
              <Text style={[type.headline, { color: colors.dark.background }]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
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
    borderRadius: 17,
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
  primarySection: {
    backgroundColor: colors.light.primary,
  },
  footer: {
    backgroundColor: colors.dark.grey1,
  },
});
