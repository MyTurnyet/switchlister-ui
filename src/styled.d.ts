import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      background: {
        appBackground: string;
        cardBackground: string;
      };
      cardBorder: string;
      main: string;
      secondary: string;
      text: {
        normal: string;
        header: string;
      };
    };
  }
}
