import { styled } from 'styled-components';

import { Icon } from '../../Icon';

const CreateNewBoardButton: React.FC = () => {
  return (
    <ListButtonItem>
      <Icon icon="board" />
      <span>+ Create new board</span>
    </ListButtonItem>
  );
};
export { CreateNewBoardButton };

const ListButtonItem = styled.button`
  color: ${({ theme }): string => theme.palette.primary.main};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.875rem 1.5rem;
  display: grid;
  grid-template-columns: 1rem auto;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    color: ${({ theme }): string => theme.palette.primary.light};
  }
`;
