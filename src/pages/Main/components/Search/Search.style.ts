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
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xl}`};
  }
`;

export const SearchStyled = styled.div`
  position: relative;
  height: 60px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  & input {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xxxl}`};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;

  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.xl};
`;

export const ButtonStyled = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5e7bc7;
  border-radius: ${({ theme }) => theme.border.borderRadius.sm};

  overflow: hidden;

  &:hover {
    border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};
  }
  @media ${({ theme }) => theme.media.mob} {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
