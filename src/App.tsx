import React from 'react';
import { TrainGrid } from './components/TrainGrid/TrainGrid';
import { Route, Routes } from 'react-router-dom';
import { TrainPage } from './components/TrainPage/TrainPage';
import { RollingStockPage } from './components/RollingStockPage/RollingStockPage';
import { TrainsDataProvider } from './data/TrainsContext';

function App() {
  return (
    <TrainsDataProvider>
      <Routes>
        <Route path={'/'} element={<TrainGrid />} />
        <Route path={'/trains/:id'} element={<TrainPage />} />
        <Route path={'/rollingstock'} element={<RollingStockPage />} />
      </Routes>
    </TrainsDataProvider>
  );
}

export default App;
