import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { Train, TrainState } from '../models/Train';
import { useReactState } from '../state-management/ReactState';
import { TrainApi } from './api/TrainApi';
import { TrainCollection } from '../models/TrainCollection';

export interface TrainsDataContext {
  trainCollection: TrainCollection;
  isLoading: boolean;
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

function createTrainCollectionFromData(trainData: TrainState[]): TrainCollection {
  const trains = trainData.map((trainState: TrainState) => new Train(trainState));
  return new TrainCollection(trains);
}

export const TrainsDataProvider = ({ children }: PropsWithChildren) => {
  const trainData = useReactState<TrainState[]>([]);
  const isLoadingState = useReactState<boolean>(false);

  const getTrains = useCallback(() => {
    isLoadingState.setValue(true);
    TrainApi.getTrains()
      .then((data) => trainData.setValue(data))
      .finally(() => isLoadingState.setValue(false));
  }, [trainData]);

  const trainsDataContext: TrainsDataContext = {
    isLoading: isLoadingState.value,
    getTrains,
    trainCollection: createTrainCollectionFromData(trainData.value),
  };
  return <TrainsContext.Provider value={trainsDataContext}>{children}</TrainsContext.Provider>;
};
