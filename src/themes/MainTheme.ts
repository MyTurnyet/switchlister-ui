import { DefaultTheme } from 'styled-components';

const mediumBlue = '#1565c0';
const darkBlue = '#131333';

const mainTheme: DefaultTheme = {
  borderRadius: '8px',
  colors: {
    background: {
      appBackground: 'ghostwhite',

      cardBackground: mediumBlue,
    },
    cardBorder: mediumBlue,
    main: darkBlue,
    secondary: '',
    text: {
      header: mediumBlue,
      normal: darkBlue,
    },
  },
};

export { mainTheme };
