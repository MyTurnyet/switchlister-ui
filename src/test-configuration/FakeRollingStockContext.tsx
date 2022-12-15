import React, { PropsWithChildren } from 'react';
import { RollingStockContext, RollingStockContextState } from '../data/RollingStockContext';
import { RollingStockCollection } from '../models/collections/RollingStockCollection';
import { RollingStock } from '../models/RollingStock';

export interface FakeRollingStockContextProps extends PropsWithChildren {
  carsToReturn: RollingStock[];
}

export const FakeRollingStockContext = (props: FakeRollingStockContextProps) => {
  const providerValues: RollingStockContextState = {
    getRollingStock: (): void => {
      new RollingStockCollection(props.carsToReturn);
    },
    isLoading: false,
    rollingStock: new RollingStockCollection(props.carsToReturn),
  };
  return (
    <RollingStockContext.Provider value={providerValues}>
      {props.children}
    </RollingStockContext.Provider>
  );
};
