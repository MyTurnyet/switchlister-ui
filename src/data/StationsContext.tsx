import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';
import { useReactState } from '../state-management/ReactState';
import { Station, StationState } from '../models/Station';
import { StationsApi } from './api/StationsApi';
import { Industry, IndustryState } from '../models/Industry';
import { RollingStock } from '../models/RollingStock';
import {
  IndustryCollection,
  IndustryCollectionBuilder,
} from '../models/collections/IndustryCollection';

export interface StationsDataContext {
  stations: StationCollection;
  industriesAtStation: (station: Station) => IndustryCollection;
  isLoading: boolean;
  refreshData: () => void;
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
export const StationsProvider = ({ children }: PropsWithChildren) => {
  const isLoadingState = useReactState<boolean>(false);
  const stationCollectionState = useReactState<StationCollection>(new StationCollection([]));
  const industryCollectionState = useReactState<IndustryCollection>(new IndustryCollection([]));

  const refreshData = useCallback(() => {
    isLoadingState.setValue(true);
    StationsApi.getStations()
      .then((data: StationState[]) => {
        const stationCollection = StationCollection.createFromStationStateArray(data);
        const industryCollectionBuilder: IndustryCollectionBuilder =
          new IndustryCollectionBuilder();
        data.forEach((stationState: StationState) => {
          stationState.industries.forEach((industry: IndustryState) => {
            industryCollectionBuilder.addFromState(industry);
          });
        });
        industryCollectionState.setValue(industryCollectionBuilder.build());
        stationCollectionState.setValue(stationCollection);
      })
      .finally(() => isLoadingState.setValue(false));
  }, [stationCollectionState]);

  const industriesAtStation = (station: Station): IndustryCollection => {
    return new IndustryCollection([]);
  };
  const setCarAtIndustry = (industry: Industry, carToSetOut: RollingStock): void => {
    const stationCollection = stationCollectionState.value;
    const industryToSetCars = stationCollection.findIndustry(industry.id);
    industryToSetCars.placedCars.addCar(carToSetOut);
    stationCollectionState.setValue(stationCollection);
  };

  const stationDataContext: StationsDataContext = {
    industriesAtStation,
    setCarAtIndustry,
    refreshData,
    isLoading: isLoadingState.value,
    stations: stationCollectionState.value,
  };

  return <StationsContext.Provider value={stationDataContext}>{children}</StationsContext.Provider>;
};
