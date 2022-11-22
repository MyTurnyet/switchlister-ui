import React, { createContext, PropsWithChildren, useContext } from 'react';
import { RollingStockState } from '../models/RollingStock';
import { useReactState } from '../state-management/ReactState';

export interface RollingStockContextState {
  rollingStock: RollingStockState[];
}

const defaultData: RollingStockContextState = { rollingStock: [] };

const RollingStockContext = createContext<RollingStockContextState>(defaultData);

export const RollingStockProvider = ({ children }: PropsWithChildren) => {
  const rollingStockData = useReactState<RollingStockState[]>([]);
  const returnedState: RollingStockContextState = { rollingStock: rollingStockData.value };
  return (
    <RollingStockContext.Provider value={returnedState}>{children}</RollingStockContext.Provider>
  );
};

export const useRollingStockData = (): RollingStockContextState => {
  return useContext(RollingStockContext);
};
