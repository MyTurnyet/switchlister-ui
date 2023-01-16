import React from 'react';
import { useTrainRoutesData } from '../../data/TrainRoutesContext';
import { TrainRoute } from '../../models/TrainRoute';
import { RouteDisplayHeader } from '../RouteGrid/RouteGrid';
import { RouteCard } from '../RouteGrid/RouteCard';

export const DispatcherPage = () => {
  const { trainRoutes } = useTrainRoutesData();
  const handleRoutePress = (routeClicked: TrainRoute) => {
    console.log(`clicked a route: ${routeClicked.name}`);
    return;
  };
  return (
    <div>
      <RouteDisplayHeader>All Train Routes</RouteDisplayHeader>
      {trainRoutes.map((route: TrainRoute) => (
        <RouteCard key={route.id} route={route} handlePress={handleRoutePress} />
      ))}
    </div>
  );
};
