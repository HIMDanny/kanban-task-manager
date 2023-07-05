import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { Icon } from '../../Icon';

interface NavItemProperties {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProperties> = ({ label, href }) => {
  return (
    <ListItem>
      <NavLink to={href}>
        <Icon icon="board" /> <span>{label}</span>
      </NavLink>
    </ListItem>
  );
};
export { NavItem };

const ListItem = styled.li`
  border-top-right-radius: 6.25rem;
  border-bottom-right-radius: 6.25rem;
  color: ${({ theme }): string => theme.palette.grey[500]};

  a {
    padding: 0.875rem 1.5rem;
    display: grid;
    grid-template-columns: 1rem auto;
    align-items: center;
    gap: 0.75rem;
    font-weight: 700;
  }

  &:has(.active) {
    color: ${({ theme }): string => theme.palette.primary.contrastText};
    background-color: ${({ theme }): string => theme.palette.primary.main};
  }

  &:hover {
    background-color: ${({ theme }): string => theme.palette.primary.light};
    color: ${({ theme }): string => theme.palette.primary.contrastText};
  }
`;
