import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { Train, TrainState } from '../models/Train';
import { useReactState } from '../state-management/ReactState';
import { v4 as uuidv4 } from 'uuid';
import { TrainApi } from './api/TrainApi';

export const train1State: TrainState = {
  id: uuidv4(),
  name: 'Local Express',
  stations: ['station 1', 'station 2'],
};
export const train2State: TrainState = {
  id: uuidv4(),
  name: 'Another Train',
  stations: ['station 14', 'station 2', 'station 21'],
};
export const train1 = new Train(train1State);
export const train2 = new Train(train2State);

export interface TrainsDataContext {
  trains: Train[];
  isLoading: boolean;
  getById: (id: string) => Train;
  getTrains: () => void;
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
  const trainData = useReactState<TrainState[]>([]);
  const isLoadingState = useReactState<boolean>(false);
  const trainsToReturn = trainData.value.map((trainState: TrainState) => new Train(trainState));

  const getTrains = useCallback(() => {
    isLoadingState.setValue(true);
    TrainApi.getTrains()
      .then((data) => trainData.setValue(data))
      .finally(() => isLoadingState.setValue(false));
  }, [trainData]);

  const getById = (id: string): Train => {
    const trainById = trainsToReturn.find((train) => train.id === id);
    if (trainById === undefined) return Train.EMPTY_TRAIN;
    return trainById;
  };
  const trainsDataContext: TrainsDataContext = {
    trains: trainsToReturn,
    getById,
    isLoading: isLoadingState.value,
    getTrains,
  };
  return <TrainsContext.Provider value={trainsDataContext}>{children}</TrainsContext.Provider>;
};
