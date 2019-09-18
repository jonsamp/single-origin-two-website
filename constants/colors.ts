const iconSize = 22;

export interface Theme {
  [i: string]: string;
}

export default {
  default: {
    black: '#000000',
    white: '#d8d8d8',
  },
  light: {
    name: 'light',
    foreground: '#2B2B2B',
    background: '#FFFFFF',
    primaryDark: '#00A57D',
    primary: '#00b78e',
    beige: '#f8e8d5',
    warning: '#FFE982',
    grey1: '#F7F7F7',
    grey2: '#EFEFEF',
    grey3: '#adadad',
    black: '#000000',
    blue: '#4c9eea',
    iconSize,
  },
  dark: {
    name: 'dark',
    foreground: '#d8d8d8',
    background: '#000000',
    primaryDark: '#00CA9D',
    primary: '#00CA9D',
    beige: '#2B2B2B',
    warning: '#57502D',
    grey2: '#171717',
    grey1: '#2B2B2B',
    grey3: '#4F4F4F',
    black: '#000000',
    blue: '#4c9eea',
    iconSize,
  },
};
