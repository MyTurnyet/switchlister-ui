import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';
import { TrainState } from '../models/Train';
import { useReactState } from '../state-management/ReactState';
import { axiosTrainApi } from './api/AxiosTrainApi';
import { TrainCollection } from '../models/collections/TrainCollection';

export interface TrainsDataContext {
  trainCollection: TrainCollection;
  refreshTrainsData: () => void;
}

export const TrainsContext = createContext<TrainsDataContext | undefined>(undefined);

export const useTrainsData = (): TrainsDataContext => {
  const context = useContext(TrainsContext);
  if (context === undefined) {
    throw Error(
      'useTrainsData must be used inside of a TrainsProvider, ' +
        'otherwise it will not function correctly.',
    );
  }
  return context;
};

export const TrainsProvider = ({ children }: PropsWithChildren) => {
  const trainData = useReactState<TrainState[]>([]);

  const getTrains = useCallback(() => {
    axiosTrainApi.getTrains().then((data) => trainData.setValue(data));
  }, [trainData]);

  const trainsDataContext: TrainsDataContext = {
    refreshTrainsData: getTrains,
    trainCollection: TrainCollection.createFromTrainStateArray(trainData.value),
  };
  return <TrainsContext.Provider value={trainsDataContext}>{children}</TrainsContext.Provider>;
};
