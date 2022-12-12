import React, { createContext, PropsWithChildren, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';
import { useReactState } from '../state-management/ReactState';
import { StationState } from '../models/Station';

export interface StationsDataContext {
  stationsCollection: StationCollection;
  isLoading: boolean;
  getStations: () => void;
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
export const StationsDataProvider = ({ children }: PropsWithChildren) => {
  const isLoadingState = useReactState<boolean>(false);
  const stationDataState = useReactState<StationState[]>([]);

  const getStations = () => {
    return;
  };

  const stationDataContext: StationsDataContext = {
    getStations,
    isLoading: isLoadingState.value,
    stationsCollection: StationCollection.createFromStationStateArray(stationDataState.value),
  };

  return <StationsContext.Provider value={stationDataContext}>{children}</StationsContext.Provider>;
};
