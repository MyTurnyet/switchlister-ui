import React from 'react';
import { useTrainRoutesData } from '../../data/TrainRoutesContext';
import { TrainRoute } from '../../models/TrainRoute';
import { RouteDisplayHeader } from '../RouteGrid/RouteGrid';

export const DispatcherPage = () => {
  const { trainRoutes } = useTrainRoutesData();
  return (
    <div>
      <RouteDisplayHeader>All Train Routes</RouteDisplayHeader>
      {trainRoutes.map((route: TrainRoute) => (
        <div key={route.id}>{route.name}</div>
      ))}
    </div>
  );
};
