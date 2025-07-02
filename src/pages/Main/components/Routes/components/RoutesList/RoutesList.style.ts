import styled from 'styled-components';

export const RoutesListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;
