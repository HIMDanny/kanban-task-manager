import { useGetColumnsQuery } from 'client/src/api/api-slice';
import { styled } from 'styled-components';

import { CreateColumnButton } from './common/create-column-button/CreateColumnButton';

const ColumnWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const ColumnTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  color: ${({ theme }): string => theme.palette.grey['500']};
  text-transform: uppercase;
  margin-left: 10px;
`;
const ColumnColor = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: block;
  background-color: ${({ color }): string | undefined => color};
`;

const ColumnItem = styled.div`
  display: flex;
`;

const Column: React.FC = () => {
  const { data: columns } = useGetColumnsQuery();

  return (
    <ColumnWrapper>
      {columns?.map(({ id, name, color }) => (
        <ColumnItem key={id}>
          <ColumnColor color={color} />
          <ColumnTitle>{name}</ColumnTitle>
        </ColumnItem>
      ))}
      <CreateColumnButton />
    </ColumnWrapper>
  );
};

export { Column };
