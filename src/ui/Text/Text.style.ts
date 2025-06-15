import styled, { css } from 'styled-components';

const textStyle = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.black};
`;

export const Topic = styled.h2`
  ${textStyle}
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Title = styled.h3`
  ${textStyle}
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const DText = styled.p`
  ${textStyle}
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
