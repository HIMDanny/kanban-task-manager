import { styled } from 'styled-components';

const CreateColumnButton: React.FC = () => {
  return (
    <ButtonWrapper>
      <span>+ New column</span>
    </ButtonWrapper>
  );
};
export { CreateColumnButton };

const ButtonWrapper = styled.button.attrs(() => ({
  type: 'button',
}))`
  color: ${({ theme }): string => theme.palette.grey['500']};
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  height: 814px;
`;
