import { FC } from 'react';

import { InputStyle } from './Input.style';

interface InputProps {
  text: string;
  setText: (value: string) => void;
  placeholder?: string;
  type?: string;
  min?: number;
}
export const Input: FC<InputProps> = ({ text, setText, ...props }) => {
  return <InputStyle value={text} onChange={(e) => setText(e.target.value)} {...props}></InputStyle>;
};
