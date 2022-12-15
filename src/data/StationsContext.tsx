import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';
import { useReactState } from '../state-management/ReactState';
import { StationState } from '../models/Station';
import { StationsApi } from './api/StationsApi';
import { Industry } from '../models/Industry';
import { RollingStock } from '../models/RollingStock';

export interface StationsDataContext {
  stationsCollection: StationCollection;
  isLoading: boolean;
  getStations: () => void;
  setCarAtIndustry: (industry: Industry, carToSetOut: RollingStock) => void;
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

  const getStations = useCallback(() => {
    isLoadingState.setValue(true);
    StationsApi.getStations()
      .then((data) => stationDataState.setValue(data))
      .finally(() => isLoadingState.setValue(false));
  }, [stationDataState]);

  const stationDataContext: StationsDataContext = {
    setCarAtIndustry(industry: Industry, carToSetOut: RollingStock): void {},
    getStations,
    isLoading: isLoadingState.value,
    stationsCollection: StationCollection.createFromStationStateArray(stationDataState.value),
  };

  return <StationsContext.Provider value={stationDataContext}>{children}</StationsContext.Provider>;
};
