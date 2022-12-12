import { PropsWithChildren } from 'react';
import { StationsContext, StationsDataContext } from '../data/StationsContext';
import { StationCollection } from '../models/collections/StationCollection';

export const FakeStationsProvider = (props: PropsWithChildren) => {
  const stationContextValues: StationsDataContext = {
    getStations: () => {
      return;
    },
    isLoading: false,
    stationsCollection: new StationCollection([]),
  };
  return (
    <StationsContext.Provider value={stationContextValues}>
      {props.children}
    </StationsContext.Provider>
  );
};
