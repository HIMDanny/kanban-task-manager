import { getButtonStyles } from 'client/src/components/button/utils/helpers/get-button-styles/get-button-styles.helper';
import styled, { css } from 'styled-components';

import type { Properties } from '../../Button';
import { primaryL, primaryS } from '../../styles';

const ButtonWrapper = styled.button<Properties>(({ variant, size }) => {
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
    width: ${size === 'large' ? primaryL.width : primaryS.width};
    height: ${size === 'large' ? primaryL.height : primaryS.height};

    &:hover {
      background: ${hoverBackground};
    }
  `;
});

export { ButtonWrapper };
