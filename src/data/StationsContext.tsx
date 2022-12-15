import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';
import { useReactState } from '../state-management/ReactState';
import { StationState } from '../models/Station';
import { StationsApi } from './api/StationsApi';
import { Industry } from '../models/Industry';
import { RollingStock } from '../models/RollingStock';
import { industryXmHtNoCarsState } from '../test-configuration/FixtureTrains';

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

  const stationsCollection = StationCollection.createFromStationStateArray(stationDataState.value);

  const getStations = useCallback(() => {
    isLoadingState.setValue(true);
    StationsApi.getStations()
      .then((data) => stationDataState.setValue(data))
      .finally(() => isLoadingState.setValue(false));
  }, [stationDataState]);

  const setCarAtIndustry = (industry: Industry, carToSetOut: RollingStock): void => {
    const industryToSetCars = stationsCollection.findIndustry(industry.id);
    industryToSetCars.placedCars.addCar(carToSetOut);
    console.log('car set out at:', industryToSetCars);
  };
  const stationDataContext: StationsDataContext = {
    setCarAtIndustry,
    getStations,
    isLoading: isLoadingState.value,
    stationsCollection,
  };

  return <StationsContext.Provider value={stationDataContext}>{children}</StationsContext.Provider>;
};
