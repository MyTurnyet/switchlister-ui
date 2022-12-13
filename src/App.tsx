import React from 'react';
import { TrainGrid } from './components/TrainGrid/TrainGrid';
import { Route, Routes } from 'react-router-dom';
import { TrainPage } from './components/TrainPage/TrainPage';
import { RollingStockPage } from './components/RollingStockPage/RollingStockPage';
import { TrainsDataProvider } from './data/TrainsContext';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Navigate } from 'react-router';
import { IndustryDataForm } from './components/IndustryPage/IndustryDataForm';
import { StationsDataProvider } from './data/StationsContext';

function App() {
  return (
    <StationsDataProvider>
      <TrainsDataProvider>
        <Routes>
          <Route path={'/'} element={<AppLayout />}>
            <Route index={true} element={<TrainGrid />} />
            <Route path='/home' element={<Navigate to={'/'} />} />
            <Route path={'/trains/:trainId'} element={<TrainPage />}></Route>
            <Route path={'/rollingstock'} element={<RollingStockPage />} />
            <Route path={'/industry/input'} element={<IndustryDataForm />} />
          </Route>
        </Routes>
      </TrainsDataProvider>
    </StationsDataProvider>
  );
}

export default App;
