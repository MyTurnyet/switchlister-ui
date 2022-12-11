import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTrainsData } from '../../data/TrainsContext';
import { Train } from '../../models/Train';
import { useReactState } from '../../state-management/ReactState';
import { Station } from '../../models/Station';
import { Industry } from '../../models/Industry';
import styled from 'styled-components';

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
    <TrainDetailsContainer>
      <div>{props.train.name}</div>
      {props.train.stations.map((station: Station) => (
        <TrainStationDetails station={station} key={station.name} />
      ))}
    </TrainDetailsContainer>
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
    <TrainPageContainer>
      <TrainPageTitle>Train Profile</TrainPageTitle>
      <TrainDetails train={currentTrain.value} />
    </TrainPageContainer>
  );
};

const TrainPageContainer = styled.div`
  background-color: honeydew;

  padding-top: 15px;
  padding-bottom: 35px;
  min-height: 95%;
  min-width: 95%;
`;
const TrainPageTitle = styled.div`
  color: ${(props) => props.theme.colors.text.header};
  font-size: large;
  font-weight: bold;
`;
const TrainDetailsContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 45px;
`;
