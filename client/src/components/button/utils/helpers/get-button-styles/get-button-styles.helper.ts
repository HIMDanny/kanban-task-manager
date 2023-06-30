import type { Properties } from 'client/src/components/button/Button';
import {
  destructive,
  primary,
  secondary,
} from 'client/src/components/button/styles/styles';
import type { ButtonStyle } from 'client/src/components/button/utils/interfaces/button-style.interface';

const getButtonStyles = (style: Properties['variant']): ButtonStyle => {
  const styles: Record<Properties['variant'], ButtonStyle> = {
    primary,
    secondary,
    destructive,
  };

  return styles[style];
};

export { getButtonStyles };
