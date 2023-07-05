import { light } from 'client/src/assets/styles/themes';
import type { ButtonStyle } from 'client/src/components/button/utils/interfaces/button-style.interface';

const primary: ButtonStyle = {
  background: light.palette.primary.main,
  color: light.palette.white,
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '23px',
  borderRadius: '20px',
  border: 'none',
  hoverBackground: light.palette.primary.light,
} as const;

const secondary: ButtonStyle = {
  background: 'hsl(242, 48, 58 / 10%)',
  color: light.palette.primary.light,
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '23px',
  borderRadius: '20px',
  border: 'none',
  hoverBackground: light.palette.grey[400],
} as const;

const destructive: ButtonStyle = {
  background: light.palette.red.main,
  color: light.palette.white,
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '23px',
  borderRadius: '20px',
  border: 'none',
  hoverBackground: light.palette.red.light,
} as const;

export { destructive, primary, secondary };
