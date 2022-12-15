import React, { PropsWithChildren } from 'react';
import { RollingStockContext, RollingStockContextState } from '../data/RollingStockContext';
import { RollingStockCollection } from '../models/collections/RollingStockCollection';

export type FakeRollingStockContextProps = PropsWithChildren;

export const FakeRollingStockContext = (props: FakeRollingStockContextProps) => {
  const providerValues: RollingStockContextState = {
    getRollingStock: (): void => {},
    isLoading: false,
    rollingStock: new RollingStockCollection([]),
  };
  return (
    <RollingStockContext.Provider value={providerValues}>
      {props.children}
    </RollingStockContext.Provider>
  );
};
