import React from 'react';
import styled from '@emotion/styled';
import { TrainGrid } from './components/TrainGrid/TrainGrid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrainPage } from './components/TrainPage/TrainPage';

function App() {
  const MainAppWrapper = styled.div`
    background-color: #282c34;
  `;
  const AppContent = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
  `;

  return (
    <MainAppWrapper>
      <AppContent>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<TrainGrid />} />
            <Route path={'/trainpage'} element={<TrainPage />} />
          </Routes>
        </BrowserRouter>
      </AppContent>
    </MainAppWrapper>
  );
}

export default App;
