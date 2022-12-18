import React from 'react';
import { TrainGrid } from './components/TrainGrid/TrainGrid';
import { Route, Routes } from 'react-router-dom';
import { TrainPage } from './components/TrainPage/TrainPage';
import { RollingStockPage } from './components/RollingStockPage/RollingStockPage';
import { TrainsProvider } from './data/TrainsContext';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Navigate } from 'react-router';
import { IndustryDataForm } from './components/IndustryPage/IndustryDataForm';
import { StationsProvider } from './data/StationsContext';
import { IndustriesProvider } from './data/IndustriesContext';

function App() {
  return (
    <IndustriesProvider>
      <StationsProvider>
        <TrainsProvider>
          <Routes>
            <Route path={'/'} element={<AppLayout />}>
              <Route index={true} element={<TrainGrid />} />
              <Route path='/home' element={<Navigate to={'/'} />} />
              <Route path={'/trains/:trainId'} element={<TrainPage />}></Route>
              <Route path={'/rollingstock'} element={<RollingStockPage />} />
              <Route path={'/industry/input'} element={<IndustryDataForm />} />
            </Route>
          </Routes>
        </TrainsProvider>
      </StationsProvider>
    </IndustriesProvider>
  );
}

export default App;
