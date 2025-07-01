import { createGlobalStyle } from 'styled-components';

import MontBold from '/fonts/Mont/Mont-Bold.ttf';
import MontSemiBold from '/fonts/Mont/Mont-SemiBold.ttf';
import MontRegular from '/fonts/Mont/Mont-Regular.ttf';
import MontLight from '/fonts/Mont/Mont-Light.ttf';
import MontExtraLight from '/fonts/Mont/Mont-ExtraLight.ttf';

export const GlobalStyle = createGlobalStyle`
    
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

img {
  max-width: 100%;
  display: block;
}

html,
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


html {
  font-size: 16px;
}

body {
  overflow-x: hidden;
  font-family: Mont;
  font-weight: 500;
}

body.dark{
  background-color: ${({ theme }) => theme.colors.dark};
  & h1,h2,h3,h4,h5,h6,a,p, div, span, button {
  color: ${({ theme }) => theme.colors.white}
}

}
body.light{
  background-color: ${({ theme }) => theme.colors.white}
}

button {
  background-color: white;
  outline: none;
}
  
@font-face {
  font-family: 'Mont';
  src: url(${MontBold});
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Mont';
  src: url(${MontSemiBold});
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Mont';
  src: url(${MontRegular});
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Mont';
  src: url(${MontLight});
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Mont';
  src: url(${MontExtraLight});
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}
`;
