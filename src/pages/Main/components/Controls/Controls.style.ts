import styled from 'styled-components';

export const ConstrolsStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 140px;
  width: 100%;

  right: 20px;
  bottom: 20px;a
  z-index: 100;
  position: absolute;
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
