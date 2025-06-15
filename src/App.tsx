import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from '@store';
import { GlobalStyle, theme } from '@styles';
import { AppRouter } from '@components/AppRouter/AppRouter';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  );
};

export default App;
