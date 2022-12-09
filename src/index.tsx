import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocks/browser.js';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from './themes/MainTheme';

if (process.env.REACT_APP_USE_MSW_MOCK_API === 'yes') {
  worker.start();
}

const MainAppWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.appBackground};
`;

const AppContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text.normal};
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <MainAppWrapper>
        <AppContent>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppContent>
      </MainAppWrapper>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
