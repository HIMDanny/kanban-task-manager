import { getButtonStyles } from 'client/src/components/button/utils/helpers/get-button-styles/get-button-styles.helper';
import styledComponents, { css } from 'styled-components';

import type { Properties } from '../../Button';

const ButtonWrapper = styledComponents.button<Properties>(({ variant }) => {
  const {
    background,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    borderRadius,
    border,
    hoverBackground,
  } = getButtonStyles(variant);

  return css`
    background: ${background};
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    border-radius: ${borderRadius};
    border: ${border};
    padding: 10px 20px;

    &:hover {
      background: ${hoverBackground};
    }
  `;
});

export { ButtonWrapper };
