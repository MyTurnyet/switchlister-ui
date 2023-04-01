import React from 'react';
import { RouteGrid } from './components/RouteGrid/RouteGrid';
import { Route, Routes } from 'react-router-dom';
import { TrainRoutePage } from './components/RoutePage/TrainRoutePage';
import { RollingStockPage } from './components/RollingStockPage/RollingStockPage';
import { TrainsProvider } from './data/trains/TrainsContext';
import { AppLayout } from './components/AppLayout/AppLayout';
import { Navigate } from 'react-router';
import { StationsProvider } from './data/StationsContext';
import { IndustriesProvider } from './data/IndustriesContext';
import { RoutesDataProvider } from './data/trains/TrainRoutesContext';
import { DispatcherPage } from './components/DispatcherPage/DispatcherPage';

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
                <Route path={'/dispatcher'} element={<DispatcherPage />} />
                <Route path={'/rollingstock'} element={<RollingStockPage />} />
                <Route path={'/routes/:routeId'} element={<TrainRoutePage />}></Route>
              </Route>
            </Routes>
          </TrainsProvider>
        </RoutesDataProvider>
      </StationsProvider>
    </IndustriesProvider>
  );
}

export default App;
