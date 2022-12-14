import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTrainsData } from '../../data/TrainsContext';
import { Train } from '../../models/Train';
import { useReactState } from '../../state-management/ReactState';
import { Station } from '../../models/Station';
import styled from 'styled-components';
import { useIndustryData } from '../../data/IndustriesContext';
import { Industry } from '../../models/Industry';
import { IndustryDetails } from '../IndustryPage/IndustryDetails';

export const IndustriesAtStationDetails = (props: { station: Station }) => {
  const { industriesAtStation } = useIndustryData();
  const industriesAtThisStation = industriesAtStation(props.station);
  return (
    <>
      <IndustriesTitle>Industries: ({industriesAtThisStation.count})</IndustriesTitle>
      <IndustryWrapper>
        {industriesAtThisStation.map((industry: Industry) => (
          <IndustryDetails industry={industry} key={industry.name} />
        ))}
      </IndustryWrapper>
    </>
  );
};
export const TrainStationDetails = (props: { station: Station }) => {
  return (
    <StationDetailsContainer>
      <StationName>Station: {props.station.name}</StationName>
      <IndustriesAtStationDetails station={props.station} />{' '}
    </StationDetailsContainer>
  );
};
export const TrainDetails = (props: { train: Train }) => {
  return (
    <TrainDetailsContainer>
      <TrainName>{props.train.name}</TrainName>
      {props.train.stations.map((station: Station) => (
        <TrainStationDetails station={station} key={station.name} />
      ))}
    </TrainDetailsContainer>
  );
};

export const TrainPage = () => {
  const { trainId } = useParams();
  const { trainCollection } = useTrainsData();
  const currentTrain = useReactState<Train>(Train.EMPTY_TRAIN);
  useEffect(() => {
    if (trainId === undefined) return;
    currentTrain.setValue(trainCollection.findWithId(trainId));
  });

  return (
    <TrainPageContainer>
      <TrainPageTitle>Train Profile</TrainPageTitle>
      <TrainDetails train={currentTrain.value} />
    </TrainPageContainer>
  );
};

const TrainPageContainer = styled.div`
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
const TrainName = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-weight: bold;
  font-size: medium;
`;
const StationDetailsContainer = styled.div`
  padding-left: 12px;
  padding-top: 12px;

  & ul {
    padding-left: 10px;
    list-style: none;
  }
`;
const StationName = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-weight: bold;
  font-size: medium;
  border-bottom: ${(props) => props.theme.colors.main} 1px solid;
`;
const IndustryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
const IndustriesTitle = styled.div`
  color: ${(props) => props.theme.colors.text.normal};
  font-size: medium;
`;
