import React, { PropsWithChildren } from 'react';
import { TrainsContext } from '../data/TrainsContext';
import { Train } from '../models/Train';
import { TrainCollection } from '../models/collections/TrainCollection';

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
        refreshTrainsData: () => {
          return;
        },
        trainCollection: new TrainCollection(props.trainsToReturn),
      }}
    >
      {props.children}
    </TrainsContext.Provider>
  );
};

FakeTrainContext.defaultProps = defaultProps;
