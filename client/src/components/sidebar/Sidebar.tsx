import { styled } from 'styled-components';

import { Logo } from '../Logo';
import { NavList } from './nav/NavList';

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <header>
        <Logo />
      </header>
      <div>
        <NavList />
      </div>
      <footer>switch</footer>
    </SidebarWrapper>
  );
};
export { Sidebar };

const SidebarWrapper = styled.aside`
  padding-block: 2rem;
  border-right: ${({ theme }): string => `1px solid ${theme.components.line}`};
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 3.375rem;
  max-width: 261px;
  width: 100%;
  height: 100%;

  @media (width >= 1440px) {
    max-width: 300px;
  }

  > header {
    padding-inline: 1.625rem;
  }
`;
