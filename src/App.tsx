import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { SideBar } from '@components';
import { store } from '@store';
import { GlobalStyle, theme } from '@styles';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SideBar />
          <h1>Карта</h1>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  );
};

export default App;
