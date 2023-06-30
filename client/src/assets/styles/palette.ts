const palette = {
  primary: {
    main: 'hsl(242, 48%, 58%)',
    light: 'hsl(242, 100%, 82%)',
  },
  black: 'hsl(237, 100%, 4%)',
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
  purple: {
    main: 'hsl(242, 48%, 58%)',
    hover: 'hsl(243, 100%, 82%)',
  },
} as const;

export { palette };
