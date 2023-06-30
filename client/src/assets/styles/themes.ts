import type { DefaultTheme } from 'styled-components';

import { palette } from './palette';

const light: DefaultTheme = {
  palette: palette,
  components: {
    mainBackground: palette.grey[300],
    line: palette.grey[400],
  },
};

const dark: DefaultTheme = {
  palette: palette,
  components: {
    mainBackground: palette.grey[800],
    line: palette.grey[600],
  },
};

export { dark, light };
