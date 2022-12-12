import { createContext, useContext } from 'react';
import { StationCollection } from '../models/collections/StationCollection';

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
