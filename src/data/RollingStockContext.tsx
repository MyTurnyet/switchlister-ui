import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect } from 'react';
import { RollingStockState } from '../models/RollingStock';
import { useReactState } from '../state-management/ReactState';
import { RollingStockCollection } from '../models/collections/RollingStockCollection';
import { RollingStockApi } from './api/RollingStockApi';

export interface RollingStockContextState {
  rollingStock: RollingStockCollection;
  isLoading: boolean;
  getRollingStock: () => void;
}

export const RollingStockContext = createContext<RollingStockContextState | undefined>(undefined);

export const useRollingStockData = (): RollingStockContextState => {
  const context = useContext(RollingStockContext);
  if (context === undefined) {
    throw Error(
      'useRollingStockData must be used inside of a RollingStockProvider, ' +
        'otherwise it will not function correctly.',
    );
  }
  return context;
};

export const RollingStockProvider = ({ children }: PropsWithChildren) => {
  const rollingStockDataState = useReactState<RollingStockState[]>([]);
  const isLoadingState = useReactState<boolean>(false);

  const getRollingStock = useCallback(() => {
    isLoadingState.setValue(true);
    RollingStockApi.getRollingStock()
      .then((data) => rollingStockDataState.setValue(data))
      .finally(() => isLoadingState.setValue(false));
  }, [isLoadingState, rollingStockDataState]);

  useEffect(() => getRollingStock(), []);

  const returnedState: RollingStockContextState = {
    rollingStock: RollingStockCollection.createFromRollingStockStateArray(
      rollingStockDataState.value,
    ),
    isLoading: isLoadingState.value,
    getRollingStock: getRollingStock,
  };
  return (
    <RollingStockContext.Provider value={returnedState}>{children}</RollingStockContext.Provider>
  );
};
