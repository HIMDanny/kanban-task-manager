import { getButtonStyles } from 'client/src/components/button/utils/helpers/get-button-styles/get-button-styles.helper';
import styled, { css } from 'styled-components';

import type { Properties } from '../../Button';

const ButtonWrapper = styled.button<Properties>(
  ({ variant, width, height }) => {
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
      width: ${width};
      height: ${height};

      &:hover {
        background: ${hoverBackground};
      }
    `;
  },
);

export { ButtonWrapper };
