import { THEME } from '@constants';
import { useTheme } from '@context';
import { theme } from '@styles';
import { FC } from 'react';

interface ArrowProps {
  color?: string;
  decorColor?: string;
  width?: number;
  height?: number;
}

export const Arrow: FC<ArrowProps> = ({ width, height, ...props }) => {
  const { theme: themeContext } = useTheme();

  return (
    <svg width={width || 11} height={height || 16} viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.75425 15.0383L1.31947 9.49222C1.11044 9.27891 0.953672 9.04783 0.849157 8.79897C0.744642 8.55011 0.692383 8.28347 0.692383 7.99905C0.692383 7.71464 0.744642 7.448 0.849157 7.19914C0.953672 6.95028 1.11044 6.71919 1.31947 6.50588L6.75425 0.95982C7.41618 0.284338 8.17426 0.133599 9.0285 0.507603C9.88274 0.881607 10.3092 1.54785 10.3078 2.50632L10.3078 13.4918C10.3078 14.4517 9.88065 15.1186 9.02641 15.4926C8.17217 15.8666 7.41479 15.7152 6.75425 15.0383Z"
        fill={themeContext === THEME.LIGHT ? '#373737' : theme.colors.white}
      />
    </svg>
  );
};
