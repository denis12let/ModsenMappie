import { FC, ReactNode } from 'react';
import ReactDOMServer from 'react-dom/server';

interface MarkerProps {
  children?: ReactNode;
}

export const Marker: FC<MarkerProps> = ({ children }) => {
  return <div>{children}</div>;
};

const htmlString = ReactDOMServer.renderToStaticMarkup(<Marker />);
