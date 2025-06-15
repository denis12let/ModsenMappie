import { FC } from 'react';

import { theme } from '@styles';

interface CultureProps {
  color?: string;
  decorColor?: string;
}

export const Culture: FC<CultureProps> = (props) => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="200" height="200" rx="100" fill="#B99844" />
    <path
      d="M100 47L55 70.5714V80H145V70.5714M121.316 89.4286V122.429H135.526V89.4286M55 146H145V131.857H55M92.8947 89.4286V122.429H107.105V89.4286M64.4737 89.4286V122.429H78.6842V89.4286H64.4737Z"
      fill="black"
      fill-opacity="0.7"
    />
  </svg>
);
