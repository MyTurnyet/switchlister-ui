import React, { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { RollingStock, RollingStockState } from '../models/RollingStock';
import { useReactState } from '../state-management/ReactState';

export interface RollingStockContextState {
  rollingStock: RollingStock[];
  isLoading: boolean;
}

const defaultData: RollingStockContextState = { rollingStock: [], isLoading: false };

const RollingStockContext = createContext<RollingStockContextState>(defaultData);

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
    rollingStock: rollingStockData.value.map((state) => new RollingStock(state)),
    isLoading: isLoading.value,
  };
  return (
    <RollingStockContext.Provider value={returnedState}>{children}</RollingStockContext.Provider>
  );
};

export const useRollingStockData = (): RollingStockContextState => {
  return useContext(RollingStockContext);
};
