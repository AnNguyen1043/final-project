import './styles/App.css';
import { Suspense } from 'react';
import { ALL_ROUTES } from './router/router';
import AppAuthenticator from './templates/app-authenticator';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import DefaultTheme from './styles/themes/default';
import DEFAULT_THEME from './styles/themes/default';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {ALL_ROUTES.map((route, index) => {
        const Component = route.component;

        return <BrowserRouter>
          <Routes>
            <Route
              path={route.path}
              element={
                <AppAuthenticator
                  key={index}
                  pageType={route.type}>
                  <Component />
                </AppAuthenticator>
              } />
          </Routes>
        </BrowserRouter>
      })}
    </Suspense>
  );
}

const AppProviders = () => {
  return <ThemeProvider theme={DEFAULT_THEME}>
    <App />
  </ThemeProvider>
}

export default App;
