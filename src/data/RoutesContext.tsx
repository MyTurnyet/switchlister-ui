import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { RouteState, TrainRoute } from '../models/TrainRoute';
import { useReactState } from '../state-management/ReactState';
import { RoutesApi } from './api/RoutesApi';

export interface RoutesDataContext {
  routes: TrainRoute[];
  refreshRoutesData: () => void;
}

export const RoutesContext = createContext<RoutesDataContext | undefined>(undefined);

export const useRoutesData = (): RoutesDataContext => {
  const context = useContext(RoutesContext);
  if (context === undefined) {
    throw Error(
      'useRoutesData must be used inside of a RoutesProvider, ' +
        'otherwise it will not function correctly.',
    );
  }
  return context;
};

export const RoutesDataProvider = ({ children }: PropsWithChildren) => {
  const routesData = useReactState<RouteState[]>([]);

  const getRoutes = useCallback(() => {
    RoutesApi.getRoutes().then((data) => routesData.setValue(data));
  }, [routesData]);

  const routesDataContext: RoutesDataContext = {
    refreshRoutesData: getRoutes,
    routes: routesData.value.map((routeState) => new TrainRoute(routeState)),
  };
  return <RoutesContext.Provider value={routesDataContext}>{children}</RoutesContext.Provider>;
};
