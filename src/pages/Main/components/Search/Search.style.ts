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

export const InputWrapper = styled.div`
  max-height: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const InputRadius = styled.div`
  max-width: 100px;
  width: 100%;
  height: 100%;
  & input {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.xl};
  }
`;
