import { createContext, PropsWithChildren, useContext } from 'react';
import { Train, TrainState } from '../models/Train';

export const train1State: TrainState = {
  name: 'Local Express',
  stations: ['station 1', 'station 2'],
};
export const train2State: TrainState = {
  name: 'Another Train',
  stations: ['station 14', 'station 2', 'station 21'],
};
export const train1 = new Train(train1State);
export const train2 = new Train(train2State);

export interface TrainsDataContext {
  trains: Train[];
}

const TrainsContext = createContext<TrainsDataContext | undefined>(undefined);

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
