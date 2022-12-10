import React, { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { RollingStock, RollingStockState } from '../models/RollingStock';
import { useReactState } from '../state-management/ReactState';
import { RollingStockCollection } from '../models/RollingStockCollection';
import { RollingStockApi } from './api/RollingStockApi';

export interface RollingStockContextState {
  rollingStock: RollingStockCollection;
  isLoading: boolean;
}

const RollingStockContext = createContext<RollingStockContextState | undefined>(undefined);

function getRollingStockCollectionFromData(rollingStockData: RollingStockState[]) {
  return new RollingStockCollection(rollingStockData.map((state) => new RollingStock(state)));
}

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
  const rollingStockData = useReactState<RollingStockState[]>([]);
  const isLoading = useReactState<boolean>(false);

  useEffect(() => {
    (async function () {
      isLoading.setValue(true);
      RollingStockApi.getRollingStock().then((data) => {
        rollingStockData.setValue(data);
        isLoading.setValue(false);
      });
    })();
  }, []);

  const returnedState: RollingStockContextState = {
    rollingStock: getRollingStockCollectionFromData(rollingStockData.value),
    isLoading: isLoading.value,
  };
  return (
    <RollingStockContext.Provider value={returnedState}>{children}</RollingStockContext.Provider>
  );
};
