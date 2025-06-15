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
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
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
  }
}
