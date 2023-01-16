import { PropsWithChildren } from 'react';
import { TrainRoute } from '../models/TrainRoute';
import { RoutesContext, RoutesDataContext } from '../data/RoutesContext';

export interface FakeRoutesContextProps extends PropsWithChildren {
  routesToReturn: TrainRoute[];
}

const defaultProps: FakeRoutesContextProps = { routesToReturn: [] };

export const FakeTrainRoutesDataContext = (props: FakeRoutesContextProps) => {
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

FakeTrainRoutesDataContext.defaultProps = defaultProps;
