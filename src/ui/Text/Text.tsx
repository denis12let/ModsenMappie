import { FC, ReactNode } from 'react';
import { DText, Title, Topic } from './Text.style';

interface TextProps {
  children: ReactNode;
  variation: 'topic' | 'title' | 'text';
}

export const Text: FC<TextProps> = ({ children, variation }) => {
  const renderText = () => {
    switch (variation) {
      case 'topic':
        return <Topic>{children}</Topic>;
      case 'title':
        return <Title>{children}</Title>;
      case 'text':
        return <DText>{children}</DText>;
      default:
        return null;
    }
  };

  return renderText();
};
