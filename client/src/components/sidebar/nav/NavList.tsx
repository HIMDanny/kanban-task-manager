import { useGetBoardsQuery } from 'client/src/api/api-slice';
import { styled } from 'styled-components';

import { CreateNewBoardButton } from './CreateNewBoardButton';
import { NavItem } from './NavItem';

const NavList: React.FC = () => {
  const { data: boards } = useGetBoardsQuery();

  return (
    <section>
      <NavHeading>All boards ({boards?.length ?? 0})</NavHeading>
      <List>
        {boards?.map(({ id, name }) => (
          <NavItem
            key={id}
            label={name}
            href={`/${id}`}
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
