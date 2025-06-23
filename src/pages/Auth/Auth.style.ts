import styled from 'styled-components';

export const AuthStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.xxxxs};
  & button {
    text-decoration: underline;
  }
`;

export const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};

  max-width: 400px;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm} `};
  text-align: center;
  & form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
  & input {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm} `};
  }
  & button {
    padding: ${({ theme }) => `${theme.spacing.xxxxs} ${theme.spacing.sm} `};

    border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};
    border-radius: ${({ theme }) => theme.border.borderRadius.md};
    &:hover {
      opacity: 0.6;
    }
    &:active {
      opacity: 0.8;
    }
  }
`;

export const AuthBottom = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxxs};
  max-width: 300px;
  width: 100%;
  white-space: nowrap;
`;

export const ButtonWrapper = styled.span``;
