import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTrainsData } from '../../data/TrainsContext';
import { Train } from '../../models/Train';
import { useReactState } from '../../state-management/ReactState';
import { Station } from '../../models/Station';
import { Industry } from '../../models/Industry';

export const TrainStationDetails = (props: { station: Station }) => (
  <div>
    <div>Station: {props.station.name}</div>
    <div>Industries: ({props.station.industries.count})</div>
    <ul>
      {props.station.industries.map((industry: Industry) => (
        <li key={industry.name}>{industry.name}</li>
      ))}
    </ul>
  </div>
);
export const TrainDetails = (props: { train: Train }) => {
  return (
    <div>
      <div>{props.train.name}</div>
      {props.train.stations.map((station: Station) => (
        <TrainStationDetails station={station} key={station.name} />
      ))}
    </div>
  );
};

export const TrainPage = () => {
  const { id } = useParams();
  const { trainCollection } = useTrainsData();
  const currentTrain = useReactState<Train>(Train.EMPTY_TRAIN);
  useEffect(() => {
    if (id === undefined) return;
    currentTrain.setValue(trainCollection.findWithId(id));
  });

  return (
    <div>
      <div>Train Profile</div>
      <TrainDetails train={currentTrain.value} />
    </div>
  );
};
