import { FC } from 'react';

import { theme } from '@styles';

interface PlusProps {
  color?: string;
  decorColor?: string;
}

export const Plus: FC<PlusProps> = (props) => (
  <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.39294 1.51422V12.0999" stroke="#808080" strokeWidth={3} strokeLinecap="round" />
    <path d="M12.6857 6.80695H2.09998" stroke="#808080" strokeWidth={3} strokeLinecap="round" />
  </svg>
);
