import mixins from './mixins';

const theme = {
  breakpoints: {
    mobileS: `min-width: 320px`,
    mobileM: `min-width: 375px`,
    mobileL: `min-width: 414px`,
    tabletS: `min-width: 570px`,
    tablet: `min-width: 768px`,
    laptop: `min-width: 1024px`,
    laptopL: `min-width: 1440px`,
    desktop: `min-width: 2560px`,
  },

  mixins,
};

export default theme;
