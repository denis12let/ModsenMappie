import { FC } from 'react';
import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  @media (max-width: 900px) {
    border-radius: 16px;
  }
`;

interface InputProps {
  text: string;
  setText: (value: string) => void;
}

export const Input: FC<InputProps> = ({ text, setText }) => {
  return <InputStyle value={text} onChange={(e) => setText(e.target.value)}></InputStyle>;
};
