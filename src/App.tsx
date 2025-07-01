import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from '@store';
import { GlobalStyle, theme } from '@styles';
import { AppRouter } from '@components';
import { MapProvider, RouteProvider } from '@context';
import { ThemeProviderContext } from './context/ThemeContext';
import { THEME } from '@constants';

localStorage.setItem('theme', THEME.LIGHT);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeProviderContext>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouteProvider>
              <MapProvider>
                <GlobalStyle />
                <AppRouter />
              </MapProvider>
            </RouteProvider>
          </ThemeProvider>
        </Provider>
      </ThemeProviderContext>
    </HashRouter>
  );
};

export default App;
