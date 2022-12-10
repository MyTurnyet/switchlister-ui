import React, { PropsWithChildren } from 'react';
import { TrainsContext } from '../data/TrainsContext';
import { Train } from '../models/Train';

export interface FakeTrainContextProps extends PropsWithChildren {
  trainsToReturn: Train[];
  trainToReturnById: Train;
}

const defaultProps: FakeTrainContextProps = {
  trainToReturnById: Train.EMPTY_TRAIN,
  trainsToReturn: [],
};

export const FakeTrainContext = (props: FakeTrainContextProps) => {
  return (
    <TrainsContext.Provider
      value={{
        trains: props.trainsToReturn,
        getTrains: () => {
          return;
        },
        getById: (id: string) => props.trainToReturnById,
        isLoading: false,
      }}
    >
      {props.children}
    </TrainsContext.Provider>
  );
};

FakeTrainContext.defaultProps = defaultProps;
