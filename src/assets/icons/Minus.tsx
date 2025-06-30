import { FC } from 'react';

interface MinusProps {
  color?: string;
  decorColor?: string;
}

export const Minus: FC<MinusProps> = (props) => (
  <svg width={15} height={4} viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.9143 1.80695H2.32861" stroke="#808080" strokeWidth={3} strokeLinecap="round" />
  </svg>
);
