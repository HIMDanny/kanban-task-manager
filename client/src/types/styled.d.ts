import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    components: {
      line: string;
      mainBackground: string;
    };
    pallete: {
      black: string;
      grey: {
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      primary: {
        light: string;
        main: string;
      };
      red: {
        light: string;
        main: string;
      };
      white: string;
    };
  }

  export type { DefaultTheme };
}
