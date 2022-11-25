import React from 'react';
import './App.css';
import { TrainGrid } from './components/TrainGrid/TrainGrid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrainPage } from './components/TrainPage/TrainPage';
import { RollingStockPage } from './components/RollingStockPage/RollingStockPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TrainGrid />} />
        <Route path={'/trainpage'} element={<TrainPage />} />
        <Route path={'/rollingstock'} element={<RollingStockPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
