import styled from 'styled-components';

export interface ToolbarCloseButtonIconProps {
  isOpen: boolean;
}

export interface ToolbarWrapperProps {
  isOpen: boolean;
}

export const ToolBarWrapper = styled.div<ToolbarWrapperProps>`
  max-width: 445px;
  width: 100%;
  display: flex;

  transform: ${({ isOpen }) => (isOpen ? '' : `translateX(-${400}px)`)};
  transition: all ${({ theme }) => theme.transition.medium};
`;

export const ToolBarInner = styled.div`
  max-width: 400px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const ToolBarSearch = styled.div`
  position: relative;
  height: 60px;
`;

export const ToolBarSearchIcon = styled.div`
  position: absolute;

  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.xl};
`;

export const ToolbarCloseContainer = styled.div`
  max-width: 45px;
  height: 100%;
  width: 100%;
`;

export const ToolbarCloseBlock = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: calc((100vh - 80px) / 2);
  border-bottom-left-radius: ${({ theme }) => theme.border.borderRadius.md};
  opacity: 0;
  &:last-child {
    transform: rotate(180deg);
    transform: rotateX(180deg);
  }
`;
export const ToolbarCloseButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  width: 45px;
  height: 80px;
  border-radius: 0 ${({ theme }) => theme.border.borderRadius.md} ${({ theme }) => theme.border.borderRadius.md} 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToolbarCloseButtonIcon = styled.div<ToolbarCloseButtonIconProps>`
  transform: ${({ isOpen }) => (isOpen ? '' : `rotate(${180}deg)`)};
  transition: all ${({ theme }) => theme.transition.medium};
  transform-origin: center center;
  flex-grow: 0;
`;
