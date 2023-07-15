import { styled } from 'styled-components';

import { ReactComponent as LogoIcon } from '../assets/icons/logo-icon.svg';
import { ReactComponent as LogoText } from '../assets/icons/logo-text.svg';

const Text = styled(LogoText)`
  color: ${({ theme }): string => theme.palette.text.primary};
  display: none;

  @media (width >= 768px) {
    display: block;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoIcon />
      <Text />
    </LogoWrapper>
  );
};

export { Logo };
