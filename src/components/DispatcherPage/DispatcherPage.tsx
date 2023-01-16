import React from 'react';
import { useTrainRoutesData } from '../../data/TrainRoutesContext';
import { TrainRoute } from '../../models/TrainRoute';

export const DispatcherPage = () => {
  const { trainRoutes } = useTrainRoutesData();
  return (
    <div>
      {trainRoutes.map((route: TrainRoute) => (
        <div key={route.id}>{route.name}</div>
      ))}
    </div>
  );
};
