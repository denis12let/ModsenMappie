import styled from 'styled-components';

export const SearchBox = styled.div`
  border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  height: 470px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
