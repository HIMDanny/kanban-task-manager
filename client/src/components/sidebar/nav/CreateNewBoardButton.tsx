import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { Icon } from '../../Icon';

// ? can be changed to button instead of link
const CreateNewBoardButton: React.FC = () => {
  return (
    <ListButtonItem>
      <Link to="/new">
        <Icon icon="board" /> <span>+ Create new board</span>
      </Link>
    </ListButtonItem>
  );
};
export { CreateNewBoardButton };

const ListButtonItem = styled.div`
  color: ${({ theme }): string => theme.palette.primary.main};

  a {
    padding: 0.875rem 1.5rem;
    display: grid;
    grid-template-columns: 1rem auto;
    align-items: center;
    gap: 0.75rem;
    font-weight: 700;
  }

  &:hover {
    color: ${({ theme }): string => theme.palette.primary.light};
  }
`;
