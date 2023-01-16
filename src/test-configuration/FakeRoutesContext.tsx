import { PropsWithChildren } from 'react';
import { Route } from '../models/Route';
import { RoutesContext, RoutesDataContext } from '../data/RoutesContext';

export interface FakeRoutesContextProps extends PropsWithChildren {
  routesToReturn: Route[];
}

const defaultProps: FakeRoutesContextProps = { routesToReturn: [] };

export const FakeRoutesDataContext = (props: FakeRoutesContextProps) => {
  const routesDataContextValues: RoutesDataContext = {
    refreshRoutesData: (): void => {
      return;
    },
    routes: props.routesToReturn,
  };

  return (
    <RoutesContext.Provider value={routesDataContextValues}>
      {props.children}
    </RoutesContext.Provider>
  );
};

FakeRoutesDataContext.defaultProps = defaultProps;
