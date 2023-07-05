import { css, styled } from 'styled-components';

import type { Properties } from '../../Button';

const ButtonWrapper = styled.button<Properties>`
  border: none;
  border-radius: 20px;
  font-size: 13px;
  line-height: 23px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  padding: 9px 69px;

  ${({ variant, theme }): ReturnType<typeof css> => {
    switch (variant) {
      case 'primary': {
        return css`
          background: ${theme.palette.primary.main};
          color: ${theme.palette.white};
          
          &:hover {
            background: ${theme.palette.primary.light};
          }
        `;
      }
      case 'destructive': {
        return css`
          background: ${theme.palette.red.main};
          color: ${theme.palette.white};
          
          &:hover {
            background: ${theme.palette.red.light};
          }
        `;
      }
      case 'secondary': {
        return css`
          background: hsl(242deg 48% 58% / 10%);
          color: ${theme.palette.primary.main};
          
          &:hover {
            background: hsl(242deg 48% 58% / 25%);
          }
        `;
      }
    }
  }}
`;

export { ButtonWrapper };
