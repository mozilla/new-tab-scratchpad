import lightTheme from './firefox-themes/light'
import darkTheme from './firefox-themes/dark'

export interface NewtThemes {
  [key: string]: NewtTheme
}

interface NewtTheme {
  name: string
  matchKeys?: null | MatchKeys
  defaultBackground: string
  newtColors: any
  newtColorsDark?: any
  firefoxTheme?: any
  previewColors: any
}

interface MatchKeys {
  icons: string
  toolbar: string
  frame: string
}

const defaultLight = {
  'background-primary': '#F9F9FA',
  'background-secondary': '#FFFFFF',
  'card-background': '#FFFFFF',
  'card-background-a9': '#FFFFFFE6',
  'card-color-primary': '#20123A',
  'card-color-secondary': '#20123A80',
  'background-icon': '#CBCBCB',
  'button-primary-background': '#0060DF',
  'button-primary-color': '#FFFFFF',
  'button-secondary-background': '#9999991A',
  'button-secondary-color': '#484848',
  'color-primary': '#20123A',
  'color-secondary': '#20123A80',
}

const defaultDark = {
  'background-primary': '#1C1B22',
  'background-secondary': '#15141A',
  'card-background': '#32313C',
  'card-background-a9': '#32313CE6',
  'card-color-primary': '#E0E0E6',
  'card-color-secondary': '#9F9FAD',
  'background-icon': '#716F87',
  'button-primary-background': '#45A1FF',
  'button-primary-color': '#FFFFFF',
  'button-secondary-background': '#32313CE6',
  'button-secondary-color': '#CFCFD8',
  'color-primary': '#CFCFD8',
  'color-secondary': '#CFCFD880',
}

const themes: NewtThemes = {
  auto: {
    name: 'Auto',
    matchKeys: null,
    defaultBackground: 'noodlesMono',
    newtColors: defaultLight,
    newtColorsDark: defaultDark,
    previewColors: {},
  },
  light: {
    name: 'Light',
    matchKeys: {
      icons: 'rgb(24, 25, 26, 0.7)',
      toolbar: '#f5f6f7',
      frame: '#E3E4E6',
    },
    defaultBackground: 'noodlesMono',
    newtColors: defaultLight,
    firefoxTheme: lightTheme,
    previewColors: {
      toolbarBg: '#F9F9FA',
      toolbarFieldBg: '#FFFFFF',
      background: '#E1E1E5',
      tabLine: '#0A84FF',
      toolbarFieldColor: '#000000',
      iconColor: '#525254',
    },
  },
  dark: {
    name: 'Dark',
    matchKeys: {
      icons: 'rgb(249, 249, 250, 0.7)',
      toolbar: 'hsl(240, 1%, 20%)',
      frame: 'hsl(240, 5%, 5%)',
    },
    defaultBackground: 'noodlesMono',
    newtColors: defaultDark,
    firefoxTheme: darkTheme,
    previewColors: {
      toolbarBg: '#323234',
      toolbarFieldBg: '#474749',
      background: '#0C0C0D',
      tabLine: '#0A84FF',
      toolbarFieldColor: '#F3F3F4',
      iconColor: '#BEBEBE',
    },
  },
  alpenglow: {
    name: 'Alpenglow',
    matchKeys: {
      icons: 'hsla(258, 66%, 48%, 1)',
      toolbar: 'hsla(0, 0%, 100%, .76)',
      frame: 'hsla(240, 20%, 98%, 1)',
    },
    defaultBackground: 'alpenglow',
    newtColors: {
      'background-primary': '#FFF2E7',
      'background-secondary': '#FFE4D8',
      'card-background': '#FFF2E7',
      'card-background-a9': '#FFF2E7E6',
      'card-color-primary': '#3E3155',
      'card-color-secondary': '#797087',
      'background-icon': '#DFD1C4',
      'button-primary-background': '#5A2ACB',
      'button-primary-color': '#FFFFFF',
      'button-secondary-background': '#FFE4D875',
      'button-secondary-color': '#794C5D',
      'color-primary': '#321C64',
      'color-secondary': '#321C6480',
    },
    newtColorsDark: {
      'background-primary': '#20123A',
      'background-secondary': '#190E2D',
      'card-background': '#433360',
      'card-background-a9': '#433360E6',
      'card-color-primary': '#DBCCF4',
      'card-color-secondary': '#8573A5',
      'background-icon': '#8573A5',
      'button-primary-background': '#C589FE',
      'button-primary-color': '#FFFFFF',
      'button-secondary-background': '#43336080',
      'button-secondary-color': '#EBE8F1',
      'color-primary': '#EBE8F1',
      'color-secondary': '#EBE8F180',
    },
    previewColors: {
      toolbarBg: '#FFFFFF80',
      toolbarFieldBg: '#FFFFFF',
      background: '#FF9EA5',
      tabLine: '#BB8BFF',
      toolbarFieldColor: '#2B1B4C',
      iconColor: '#6E46D5',
    },
  },
  forest: {
    name: 'Forest',
    matchKeys: {
      icons: '#829692',
      toolbar: '#073642',
      frame: '#0F1B1E',
    },
    defaultBackground: 'forest',
    newtColors: {
      'background-primary': '#0F1B1E',
      'background-secondary': '#332C16',
      'card-background': '#073642',
      'card-background-a9': '#073642E6',
      'card-color-primary': '#FDF6E3',
      'card-color-secondary': '#9C9C9C',
      'background-icon': '#0C5264',
      'button-primary-background': '#8E7732',
      'button-primary-color': '#FDF6E3',
      'button-secondary-background': '#9999993A',
      'button-secondary-color': '#FFFFFF',
      'color-primary': '#FDF6E3',
      'color-secondary': '#FDF6E380',
    },
    firefoxTheme: {
      colors: {
        icons: '#829692',
        toolbar: '#073642',
        frame: '#0F1B1E',
        tab_text: '#FDF6E3',
        tab_line: '#FDF6E3',
        toolbar_field: '#82969244',
        toolbar_field_focus: '#0F1B1E',
        toolbar_field_text: '#FFFFFF',
        tab_background_text: '#FDF6E3',
      },
    },
    previewColors: {
      toolbarBg: '#073642',
      toolbarFieldBg: '#82969244',
      background: '#0F1B1E',
      tabLine: '#FDF6E3',
      toolbarFieldColor: '#FFFFFF',
      iconColor: '#829692',
    },
  },
  // unknown: {
  //   name: 'Custom',
  //   defaultBackground: 'noodlesMono',
  //   newtColors: {},
  //   previewColors: {},
  // },
}

export default themes
