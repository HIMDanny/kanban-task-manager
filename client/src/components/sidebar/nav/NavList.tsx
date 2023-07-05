import { styled } from 'styled-components';

import { CreateNewBoardButton } from './CreateNewBoardButton';
import { NavItem } from './NavItem';

// ! for demo purpose, will be changed to api data
const links = [
  {
    link: '/',
    label: 'Platform launch',
  },
  {
    link: '/214424124',
    label: 'Marketing plan',
  },
  {
    link: '/12421444',
    label: 'Roadmap',
  },
];

const NavList: React.FC = () => {
  return (
    <section>
      <NavHeading>All boards ({links.length})</NavHeading>
      <List>
        {links.map(({ label, link }) => (
          <NavItem
            key={label}
            label={label}
            href={link}
          />
        ))}
      </List>
      <CreateNewBoardButton />
    </section>
  );
};
export { NavList };

const NavHeading = styled.p`
  padding-inline: 2rem;
  color: ${({ theme }): string => theme.palette.grey[500]};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.15rem;
`;

const List = styled.ul`
  max-height: 50vh;
  overflow-y: auto;
  margin-top: 1.25rem;
  padding-right: 1.25rem;
`;
