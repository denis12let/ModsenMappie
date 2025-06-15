import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{}>`
    
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
}

button {
  background-color: white;
  outline: none;
}
`;
