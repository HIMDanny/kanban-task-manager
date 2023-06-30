import type { Properties } from 'client/src/components/button/Button';
import {
  destructive,
  primary,
  secondary,
} from 'client/src/components/button/styles';
import type { ButtonStyle } from 'client/src/components/utils/interfaces/interfaces';

const getButtonStyles = (style: Properties['variant']): ButtonStyle => {
  const styles: Record<Properties['variant'], ButtonStyle> = {
    primary,
    secondary,
    destructive,
  };

  return styles[style];
};

export { getButtonStyles };
