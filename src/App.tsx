import React from 'react';
import { RouteGrid } from './components/TrainGrid/RouteGrid';
import { Route, Routes } from 'react-router-dom';
import { TrainPage } from './components/TrainPage/TrainPage';
import { RollingStockPage } from './components/RollingStockPage/RollingStockPage';
import { TrainsProvider } from './data/TrainsContext';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Navigate } from 'react-router';
import { StationsProvider } from './data/StationsContext';
import { IndustriesProvider } from './data/IndustriesContext';
import { RoutesDataProvider } from './data/RoutesContext';

function App() {
  return (
    <IndustriesProvider>
      <StationsProvider>
        <RoutesDataProvider>
          <TrainsProvider>
            <Routes>
              <Route path={'/'} element={<AppLayout />}>
                <Route index={true} element={<RouteGrid />} />
                <Route path='/home' element={<Navigate to={'/'} />} />
                <Route path={'/trains/:trainId'} element={<TrainPage />}></Route>
                <Route path={'/rollingstock'} element={<RollingStockPage />} />
              </Route>
            </Routes>
          </TrainsProvider>
        </RoutesDataProvider>
      </StationsProvider>
    </IndustriesProvider>
  );
}

export default App;
