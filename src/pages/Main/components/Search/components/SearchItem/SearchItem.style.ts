import styled from 'styled-components';

interface SearchItemStyledProps {
  isactive: string;
}

export const SearchItemStyled = styled.div<SearchItemStyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxxxs} 0;

  align-items: center;

  opacity: ${({ isactive }) => (!JSON.parse(isactive) ? 0.6 : 1)};

  cursor: pointer;
  &:last-child {
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }
`;

export const SearchItemImg = styled.div`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
`;
