import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { RouteState } from '../../models/TrainRoute';
import { useReactState } from '../../state-management/ReactState';
import { axiosRoutesApi, RoutesApi } from '../api/AxiosRoutesApi';
import { TrainRouteCollection } from '../../models/collections/TrainRouteCollection';

export interface RoutesDataContext {
  trainRoutes: TrainRouteCollection;
  refreshRoutesData: () => void;
}

export const TrainRoutesContext = createContext<RoutesDataContext | undefined>(undefined);

export const useTrainRoutesData = (): RoutesDataContext => {
  const context = useContext(TrainRoutesContext);
  if (context === undefined) {
    throw Error(
      'useRoutesData must be used inside of a RoutesProvider, ' +
        'otherwise it will not function correctly.',
    );
  }
  return context;
};
export interface RoutesDataProviderProps extends PropsWithChildren {
  routesApi: RoutesApi;
}
export const RoutesDataProvider = (props: RoutesDataProviderProps) => {
  const routesData = useReactState<RouteState[]>([]);

  const getRoutes = useCallback(() => {
    props.routesApi.getRoutes().then((data) => routesData.setValue(data));
  }, [routesData]);

  const routesDataContext: RoutesDataContext = {
    refreshRoutesData: getRoutes,
    trainRoutes: TrainRouteCollection.createFromTrainRouteStateArray(routesData.value),
  };
  return (
    <TrainRoutesContext.Provider value={routesDataContext}>
      {props.children}
    </TrainRoutesContext.Provider>
  );
};

RoutesDataProvider.defaultProps = {
  routesApi: axiosRoutesApi,
};
