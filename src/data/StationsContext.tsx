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
  const stationCollectionState = useReactState<StationCollection>(new StationCollection([]));

  const getStations = useCallback(() => {
    isLoadingState.setValue(true);
    StationsApi.getStations()
      .then((data: StationState[]) => {
        const stationCollection = StationCollection.createFromStationStateArray(data);
        stationCollectionState.setValue(stationCollection);
      })
      .finally(() => isLoadingState.setValue(false));
  }, [stationCollectionState]);

  const setCarAtIndustry = (industry: Industry, carToSetOut: RollingStock): void => {
    const stationCollection = stationCollectionState.value;
    const industryToSetCars = stationCollection.findIndustry(industry.id);
    industryToSetCars.placedCars.addCar(carToSetOut);
    stationCollectionState.setValue(stationCollection);
  };
  const stationDataContext: StationsDataContext = {
    setCarAtIndustry,
    getStations,
    isLoading: isLoadingState.value,
    stationsCollection: stationCollectionState.value,
  };

  return <StationsContext.Provider value={stationDataContext}>{children}</StationsContext.Provider>;
};
