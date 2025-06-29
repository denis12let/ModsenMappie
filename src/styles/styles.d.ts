// style.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray_light_light: string;
      blue: string;
      red: string;
      gray: string;
      blue_dark: string;
    };
    fonts: {
      primary: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeights: {
      extraLight: number;
      light: number;
      regular: number;
      semiBold: number;
      bold: number;
      extraBold: number;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxs: string;
    };
    border: {
      borderRadius: {
        sm: string;
        md: string;
        circle: string;
      };
      width: {
        md: string;
      };
    };
    transition: {
      quick: string;
      medium: string;
      slow: string;
    };
    media: {
      mob: string;
    };
  }
}
