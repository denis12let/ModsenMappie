import styled from 'styled-components';

export interface ToolbarWrapperProps {
  isOpen: boolean;
}

export const ToolBarWrapper = styled.div<ToolbarWrapperProps>`
  max-width: 445px;
  width: 100%;
  display: flex;
  left: 110px;
  top: 0;
  height: 100%;

  transform: ${({ isOpen }) => (isOpen ? '' : `translateX(-${400}px)`)};
  transition: all ${({ theme }) => theme.transition.medium};

  position: absolute;
`;

export const ToolBarInner = styled.div`
  max-width: 400px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  background: ${({ theme }) => theme.colors.white};
`;

export const ToolBarSearch = styled.div`
  position: relative;
  height: 60px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ToolBarSearchIcon = styled.div`
  position: absolute;

  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.xl};
`;
