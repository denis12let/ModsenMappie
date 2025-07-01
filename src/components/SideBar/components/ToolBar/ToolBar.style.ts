import { THEME } from './../../../../context/ThemeContext';
import styled from 'styled-components';

export interface ToolbarWrapperProps {
  isopen: string;
}

export interface ToolbarInnerProps {
  themeContext: string;
}

export const ToolBarWrapper = styled.div<ToolbarWrapperProps>`
  max-width: 445px;
  width: 100%;
  display: flex;
  left: 110px;
  top: 0;
  height: 100%;

  transform: ${({ isopen }) => (JSON.parse(isopen) ? '' : `translateX(-${400}px)`)};
  transition: all ${({ theme }) => theme.transition.medium};

  position: absolute;

  @media ${({ theme }) => theme.media.mob} {
    left: 70px;

    transform: ${({ isopen }) => (JSON.parse(isopen) ? '' : `translateX(-${250}px)`)};
    width: 290px;
  }
`;

export const ToolBarInner = styled.div<ToolbarInnerProps>`
  max-width: 400px;
  width: 100%;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.lg};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  background-color: ${({ theme, themeContext }) => (themeContext === THEME.LIGHT ? theme.colors.white : theme.colors.dark)};

  @media ${({ theme }) => theme.media.mob} {
    padding: ${({ theme }) => theme.spacing.xxxxs};
  }
`;
