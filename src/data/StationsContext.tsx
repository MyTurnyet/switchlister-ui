import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';
import { useReactState } from '../state-management/ReactState';
import { StationState } from '../models/Station';
import { StationsApi } from './api/StationsApi';

export interface StationsDataContext {
  stations: StationCollection;
  refreshData: () => void;
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
export const StationsProvider = ({ children }: PropsWithChildren) => {
  const stationCollectionState = useReactState<StationCollection>(new StationCollection([]));

  const refreshData = useCallback(() => {
    StationsApi.getStations().then((data: StationState[]) => {
      const stationCollection = StationCollection.createFromStationStateArray(data);
      stationCollectionState.setValue(stationCollection);
    });
  }, [stationCollectionState]);

  const stationDataContext: StationsDataContext = {
    refreshData,
    stations: stationCollectionState.value,
  };

  return <StationsContext.Provider value={stationDataContext}>{children}</StationsContext.Provider>;
};
