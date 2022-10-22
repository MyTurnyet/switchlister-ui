import React from 'react';
import './App.css';
import { TrainGrid } from './components/TrainGrid/TrainGrid';

function App() {
  const train1 = new Train('Local Express', ['station 1', 'station 2']);
  const train2 = new Train('Another Train', ['station 14', 'station 2', 'station 21']);

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
import './App.css';
import { TrainGrid } from './components/TrainGrid/TrainGrid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrainPage } from './components/TrainPage/TrainPage';
import { Train } from './models/Train';
import { TrainGrid } from './components/TrainGrid';
import styled from '@emotion/styled';
}

export default App
