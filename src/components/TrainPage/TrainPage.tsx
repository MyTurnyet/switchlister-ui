import React from 'react';
import { useParams } from 'react-router';
import { useTrainsData } from '../../data/TrainsContext';
import { Train } from '../../models/Train';

export const TrainStationDetails = (props: { stationName: string }) => (
  <div>
    <div>{props.stationName}</div>
    <ul>
      <li>Industry Name 1</li>
      <li>Industry Name 2</li>
    </ul>
  </div>
);

export const TrainPage = () => {
  const { id } = useParams();
  const { getById } = useTrainsData();
  const train: Train = getById(id!);
  return (
    <div>
      <div>Train Profile</div>
      <div>{train.name}</div>
      {train.stationNames.map((stationName: string) => (
        <TrainStationDetails stationName={stationName} key={stationName} />
      ))}
    </div>
  );
};
