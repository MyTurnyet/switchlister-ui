import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';
import { useReactState } from '../state-management/ReactState';
import { Station, StationState } from '../models/Station';
import { StationsApi } from './api/StationsApi';
import { Industry } from '../models/Industry';

export interface StationsDataContext {
  stationsCollection: StationCollection;
  isLoading: boolean;
  getStations: () => void;
  updateStation: (station: Station) => void;
  addIndustryToStation: (industryToAdd: Industry) => void;
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

  const updateStation = useCallback(async (stationToUpdate: Station) => {
    await StationsApi.postStation(stationToUpdate.asStationState());
  }, []);

  const stationDataContext: StationsDataContext = {
    addIndustryToStation: (industryToAdd: Industry) => {
      return;
    },
    getStations,
    isLoading: isLoadingState.value,
    stationsCollection: StationCollection.createFromStationStateArray(stationDataState.value),
    updateStation,
  };

  return <StationsContext.Provider value={stationDataContext}>{children}</StationsContext.Provider>;
};
