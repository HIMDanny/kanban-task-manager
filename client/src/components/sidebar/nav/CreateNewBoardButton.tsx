import { styled } from 'styled-components';

import { Icon } from '../../Icon';
import { SidebarNavItemStyles } from './styles';

const CreateNewBoardButton: React.FC = () => {
  return (
    <ListButtonItem>
      <Icon icon="board" />
      <span>+ Create new board</span>
    </ListButtonItem>
  );
};
export { CreateNewBoardButton };

const ListButtonItem = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${SidebarNavItemStyles}
  color: ${({ theme }): string => theme.palette.primary.main};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }): string => theme.palette.primary.light};
  }
`;
