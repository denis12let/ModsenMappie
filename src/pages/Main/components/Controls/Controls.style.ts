import styled from 'styled-components';

export const ConstrolsStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;

  right: 20px;
  bottom: 20px;
  z-index: 40;
  position: absolute;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

export const ControlItem = styled.div`
  border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};
  border-radius: ${({ theme }) => theme.border.borderRadius.md};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 42px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ControlButton = styled.button`
  cursor: pointer;
  height: 100%;
  border-radius: ${({ theme }) => theme.border.borderRadius.md};

  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const ControlIcon = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xxxxs};
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 3px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.gray_light_light};
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  opacity: 0.5;
`;

export const RouteStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  flex-shrink: 0;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 4px 14px 0px rgba(44, 44, 44, 0.09);
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const RouteRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & span {
    color: ${({ theme }) => theme.colors.blue_dark};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  }

  & p {
    color: ${({ theme }) => theme.colors.blue_dark};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`;
