import './App.css';
import { Suspense } from 'react';
import { ALL_ROUTES } from './router/router';
import AppAuthenticator from './templates/app-authenticator';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default App;
