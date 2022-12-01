import React, { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { RollingStock, RollingStockState } from '../models/RollingStock';
import { ReactState, useReactState } from '../state-management/ReactState';
import { RollingStockCollection } from '../models/RollingStockCollection';

export interface RollingStockContextState {
  rollingStock: RollingStockCollection;
  isLoading: boolean;
}

const defaultData: RollingStockContextState = {
  rollingStock: new RollingStockCollection([]),
  isLoading: false,
};

const RollingStockContext = createContext<RollingStockContextState>(defaultData);

function getRollingStockCollectionFromData(rollingStockData: RollingStockState[]) {
  return new RollingStockCollection(rollingStockData.map((state) => new RollingStock(state)));
}

export const RollingStockProvider = ({ children }: PropsWithChildren) => {
  const rollingStockData = useReactState<RollingStockState[]>([]);
  const isLoading = useReactState<boolean>(false);

  useEffect(() => {
    (async function () {
      isLoading.setValue(true);
      const data: RollingStockState[] = await fetch(
        'https://switchlister-api.herokuapp.com/rollingstock',
      ).then((response) => response.json());

      rollingStockData.setValue(data);
      isLoading.setValue(false);
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

export const useRollingStockData = (): RollingStockContextState => {
  return useContext(RollingStockContext);
};
