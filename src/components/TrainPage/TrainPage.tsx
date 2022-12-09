import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTrainsData } from '../../data/TrainsContext';
import { Train } from '../../models/Train';
import { useReactState } from '../../state-management/ReactState';

export const TrainStationDetails = (props: { stationName: string }) => (
  <div>
    <div>Station: {props.stationName}</div>
    <ul>
      <li>Industry Name 1</li>
      <li>Industry Name 2</li>
    </ul>
  </div>
);
export const TrainDetails = (props: { train: Train }) => {
  return (
    <div>
      <div>{props.train.name}</div>
      {props.train.stationNames.map((stationName: string) => (
        <TrainStationDetails stationName={stationName} key={stationName} />
      ))}
    </div>
  );
};

export const TrainPage = () => {
  const { id } = useParams();
  const { isLoading, getById } = useTrainsData();
  const currentTrain = useReactState<Train>(Train.EMPTY_TRAIN);
  useEffect(() => {
    if (id === undefined) return;
    currentTrain.setValue(getById(id));
  }, [isLoading]);

  return (
    <div>
      <div>Train Profile</div>
      <TrainDetails train={currentTrain.value} />
    </div>
  );
};
