import { palette } from 'client/src/assets/styles/palette';
import type {
  ButtonSize,
  ButtonStyle,
} from 'client/src/components/utils/interfaces/interfaces';

const primary: ButtonStyle = {
  background: palette.purple.main,
  color: palette.white,
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '23px',
  borderRadius: '20px',
  border: 'none',
  hoverBackground: palette.purple.hover,
} as const;

const secondary: ButtonStyle = {
  background: 'hsl(242, 48, 58 / 10%)',
  color: palette.purple.main,
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '23px',
  borderRadius: '20px',
  border: 'none',
  hoverBackground: palette.grey[400],
} as const;

const destructive: ButtonStyle = {
  background: palette.red.main,
  color: palette.white,
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '23px',
  borderRadius: '20px',
  border: 'none',
  hoverBackground: palette.red.light,
} as const;

const primaryL: ButtonSize = {
  width: '255px',
  height: '48px',
};

const primaryS: ButtonSize = {
  width: '255px',
  height: '40px',
};

export { destructive, primary, primaryL, primaryS, secondary };
