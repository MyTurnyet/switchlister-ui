import { Route } from '../models/Route';
import React, { createContext, PropsWithChildren, useContext } from 'react';

export interface RoutesDataContext {
  routes: Route[];
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

export const RoutesProvider = ({ children }: PropsWithChildren) => {
  const routesDataContext: RoutesDataContext = {
    refreshRoutesData: (): void => {
      return;
    },
    routes: [],
  };
  return <RoutesContext.Provider value={routesDataContext}>{children}</RoutesContext.Provider>;
};
