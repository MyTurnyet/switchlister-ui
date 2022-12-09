import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocks/browser.js';
import { BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';

if (process.env.REACT_APP_USE_MSW_MOCK_API === 'yes') {
  worker.start();
}
const MainAppWrapper = styled.div`
  background-color: ghostwhite;
`;
const AppContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #131333;
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MainAppWrapper>
      <AppContent>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContent>
    </MainAppWrapper>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
