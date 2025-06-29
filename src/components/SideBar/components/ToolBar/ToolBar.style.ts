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

  @media ${({ theme }) => theme.media.mob} {
    left: 70px;

    transform: ${({ isOpen }) => (isOpen ? '' : `translateX(-${400}px)`)};
  }
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
