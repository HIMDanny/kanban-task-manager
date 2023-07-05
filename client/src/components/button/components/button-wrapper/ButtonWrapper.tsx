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
    const variantStyles = {
      primary: css`
        background: ${theme.palette.primary.main};
        color: ${theme.palette.white};

        &:hover {
          background: ${theme.palette.primary.light};
        }
      `,
      secondary: css`
        background: hsl(242deg 48% 58% / 10%);
        color: ${theme.palette.primary.main};

        &:hover {
          background: hsl(242deg 48% 58% / 25%);
        }
      `,
      destructive: css`
        background: ${theme.palette.red.main};
        color: ${theme.palette.white};

        &:hover {
          background: ${theme.palette.red.light};
        }
      `,
    };
    return variantStyles[variant];
  }}
`;

export { ButtonWrapper };
