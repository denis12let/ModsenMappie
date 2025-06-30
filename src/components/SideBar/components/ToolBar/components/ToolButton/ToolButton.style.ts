import styled from 'styled-components';

export interface ToolbarCloseButtonIconProps {
  isopen: string;
}

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
  transform: ${({ isopen }) => (JSON.parse(isopen) ? '' : `rotate(${180}deg)`)};
  transition: all ${({ theme }) => theme.transition.medium};
  transform-origin: center center;
  flex-grow: 0;
`;
