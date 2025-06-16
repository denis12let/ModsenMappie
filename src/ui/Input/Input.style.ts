import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  cursor: pointer;

  opacity: 0.5;
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};

  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: Mont;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`;
