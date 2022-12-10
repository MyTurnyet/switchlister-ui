import React, { PropsWithChildren } from 'react';
import { train1, TrainsContext } from '../data/TrainsContext';

export const FakeTrainContext = (props: PropsWithChildren) => {
  return (
    <TrainsContext.Provider
      value={{
        trains: [train1],
        getTrains: () => {
          return;
        },
        getById: (id: string) => train1,
        isLoading: false,
      }}
    >
      {props.children}
    </TrainsContext.Provider>
  );
};
