import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect } from 'react';
import { RollingStockState } from '../models/RollingStock';
import { useReactState } from '../state-management/ReactState';
import { RollingStockCollection } from '../models/collections/RollingStockCollection';
import { axiosRollingStockApi, RollingStockApi } from './api/AxiosRollingStockApi';

export interface RollingStockContextState {
  rollingStock: RollingStockCollection;
  refreshRollingStockData: () => void;
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

export interface RollingStockProviderProps extends PropsWithChildren {
  rollingStockApi: RollingStockApi;
}

export const RollingStockProvider = (props: RollingStockProviderProps) => {
  const rollingStockDataState = useReactState<RollingStockState[]>([]);

  const getRollingStock = useCallback(() => {
    props.rollingStockApi.getRollingStock().then((data) => rollingStockDataState.setValue(data));
  }, [rollingStockDataState]);

  useEffect(() => getRollingStock(), []);

  const returnedState: RollingStockContextState = {
    rollingStock: RollingStockCollection.createFromRollingStockStateArray(
      rollingStockDataState.value,
    ),
    refreshRollingStockData: getRollingStock,
  };
  return (
    <RollingStockContext.Provider value={returnedState}>
      {props.children}
    </RollingStockContext.Provider>
  );
};

RollingStockProvider.defaultProps = {
  rollingStockApi: axiosRollingStockApi,
};
