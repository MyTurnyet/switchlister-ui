import React, { PropsWithChildren } from 'react';
import { TrainsContext } from '../data/trains/TrainsContext';
import { Train } from '../models/Train';
import { TrainCollection } from '../models/collections/TrainCollection';
import { TrainBuilder } from '../models/TrainBuilder';

export interface FakeTrainContextProps extends PropsWithChildren {
  trainsToReturn: Train[];
  trainToReturnById: Train;
}

const defaultProps: FakeTrainContextProps = {
  trainToReturnById: TrainBuilder.EMPTY_TRAIN,
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
