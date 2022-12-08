import { createContext, PropsWithChildren, useContext } from 'react';
import { Train } from '../models/Train';

const train1 = new Train('Local Express', ['station 1', 'station 2']);
const train2 = new Train('Another Train', ['station 14', 'station 2', 'station 21']);

export interface TrainsDataContext {
  trains: Train[];
}

export const TrainsContext = createContext<TrainsDataContext | undefined>(undefined);

export const useTrainsData = (): TrainsDataContext => {
  const context = useContext(TrainsContext);
  if (context === undefined) {
    throw Error(
      'useTrainsData must be used inside of a TrainsDataProvider, ' +
        'otherwise it will not function correctly.',
    );
  }
  return context;
};

export const TrainsDataProvider = ({ children }: PropsWithChildren) => {
  return (
    <TrainsContext.Provider value={{ trains: [train1, train2] }}>{children}</TrainsContext.Provider>
  );
};
