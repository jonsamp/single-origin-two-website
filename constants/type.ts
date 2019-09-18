// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/

import { TextStyle } from 'react-native';

export default {
  largeTitle: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.011,
    fontWeight: '900',
  } as TextStyle,
  header: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.013,
    fontWeight: '700',
  } as TextStyle,
  subheader: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.016,
    fontWeight: '700',
  } as TextStyle,
  title: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '500',
    letterSpacing: 0.019,
  } as TextStyle,
  headline: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.019,
  } as TextStyle,
  body: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.024,
    fontWeight: 'normal',
  } as TextStyle,
  callout: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.02,
    fontWeight: 'normal',
  } as TextStyle,
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'normal',
  } as TextStyle,
  label: {
    letterSpacing: 0.2,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  } as TextStyle,
};
