import { PropsWithChildren } from 'react';
import { TrainRoute } from '../models/TrainRoute';
import { TrainRoutesContext, RoutesDataContext } from '../data/TrainRoutesContext';
import { TrainRouteCollection } from '../models/collections/TrainRouteCollection';

export interface FakeRoutesContextProps extends PropsWithChildren {
  routesToReturn: TrainRoute[];
}

const defaultProps: FakeRoutesContextProps = { routesToReturn: [] };

export const FakeTrainRoutesDataContext = (props: FakeRoutesContextProps) => {
  const routesDataContextValues: RoutesDataContext = {
    refreshRoutesData: (): void => {
      return;
    },
    trainRoutes: new TrainRouteCollection(props.routesToReturn),
  };

  return (
    <TrainRoutesContext.Provider value={routesDataContextValues}>
      {props.children}
    </TrainRoutesContext.Provider>
  );
};

FakeTrainRoutesDataContext.defaultProps = defaultProps;
