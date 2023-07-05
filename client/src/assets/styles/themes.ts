import type { DefaultTheme } from 'styled-components';

const palette: DefaultTheme['palette'] = {
  primary: {
    main: 'hsl(242, 48%, 58%)',
    light: 'hsl(242, 100%, 82%)',
    contrastText: 'hsl(0, 0%, 100%)',
  },
  black: 'hsl(237, 100%, 4%)',
  text: {
    primary: 'hsl(237, 100%, 4%)',
    secondary: 'hsl(216, 15%, 57%)',
  },
  white: 'hsl(0, 0%, 100%)',
  grey: {
    300: 'hsl(220, 69%, 97%)',
    400: 'hsl(221, 69%, 94%)',
    500: 'hsl(216, 15%, 57%)',
    600: 'hsl(235, 12%, 27%)',
    700: 'hsl(235, 12%, 19%)',
    800: 'hsl(235, 16%, 15%)',
  },
  red: {
    main: 'hsl(0, 78%, 63%)',
    light: 'hsl(0, 100%, 80%)',
  },
};

const light: DefaultTheme = {
  palette,
  components: {
    mainBackground: palette.grey[300],
    line: palette.grey[400],
  },
};

const dark: DefaultTheme = {
  palette: {
    ...palette,
    text: {
      ...palette.text,
      primary: palette.white,
    },
  },
  components: {
    mainBackground: palette.grey[800],
    line: palette.grey[600],
  },
};

export { dark, light };
