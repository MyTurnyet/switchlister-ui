import React, { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { RollingStockState } from '../models/RollingStock';
import { useReactState } from '../state-management/ReactState';
import { log } from 'util';

export interface RollingStockContextState {
  rollingStock: RollingStockState[];
}

const defaultData: RollingStockContextState = { rollingStock: [] };

const RollingStockContext = createContext<RollingStockContextState>(defaultData);

export const RollingStockProvider = ({ children }: PropsWithChildren) => {
  const rollingStockData = useReactState<RollingStockState[]>([]);

  const setData = (data: RollingStockState[]) => {
    rollingStockData.setValue(data);
  };

  useEffect(() => {
    async function getData() {
      const data = await fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
        response.json(),
      );
      console.log(data);
      setData(data);
    }
    getData();
  }, []);

  const returnedState: RollingStockContextState = { rollingStock: rollingStockData.value };
  return (
    <RollingStockContext.Provider value={returnedState}>{children}</RollingStockContext.Provider>
  );
};

export const useRollingStockData = (): RollingStockContextState => {
  return useContext(RollingStockContext);
};
