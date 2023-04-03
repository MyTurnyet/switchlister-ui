import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';
import { useReactState } from '../state-management/ReactState';
import { axiosStationsApi, StationsApi } from './api/AxiosStationsApi';

export interface StationsDataContext {
  stations: StationCollection;
  refreshStationsData: () => void;
}

export const StationsContext = createContext<StationsDataContext | undefined>(undefined);

export const useStationsData = (): StationsDataContext => {
  const context = useContext(StationsContext);
  if (context === undefined) {
    throw Error(
      'useStationData must be used inside of a StationDataProvider, ' +
        'otherwise it will not function correctly.',
    );
  }
  return context;
};
export interface StationsProviderProps extends PropsWithChildren {
  stationsApi: StationsApi;
}
export const StationsProvider = (props: StationsProviderProps) => {
  const stationCollectionState = useReactState<StationCollection>(new StationCollection([]));

  const refreshStationsData = useCallback(async () => {
    const stationStates = await props.stationsApi.getStations();
    const stationCollection = StationCollection.createFromStationStateArray(stationStates);
    stationCollectionState.setValue(stationCollection);
  }, [stationCollectionState]);

  const stationDataContext: StationsDataContext = {
    refreshStationsData,
    stations: stationCollectionState.value,
  };

  return (
    <StationsContext.Provider value={stationDataContext}>{props.children}</StationsContext.Provider>
  );
};

StationsProvider.defaultProps = {
  stationsApi: axiosStationsApi,
};
