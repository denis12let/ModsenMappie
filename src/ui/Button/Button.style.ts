import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: inherit;
  cursor: pointer;

  width: 100%;
  height: 100%;

  &:disabled {
    opacity: 0.6;
  }
`;
