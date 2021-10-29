module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  dependencies: {
    '@react-native-community/google-signin': {
      platforms: {
        ios: null,
      },
    },
    'react-native-fbsdk-next': {
      platforms: {
        ios: null,
      },
    },
  },
  assets: [
    './assets/fonts/Kufam-SemiBoldItalic.ttf',
    './assets//fonts/Lato-Bold.ttf',
    './assets//fonts/Lato-BoldItalic.ttf',
    './assets//fonts/Lato-Italic.ttf',
    './assets//fonts/Lato-Regular.ttf',
  ], // stays the same
};
