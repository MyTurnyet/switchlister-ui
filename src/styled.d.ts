import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      appBackground: string;
      cardBackground: string;
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
