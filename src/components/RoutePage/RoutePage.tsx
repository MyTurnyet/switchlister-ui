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
import { useRoutesData } from '../../data/RoutesContext';
import { TrainRoute } from '../../models/TrainRoute';

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
export const StationDetails = (props: { station: Station }) => {
  return (
    <StationDetailsContainer>
      <StationName>Station: {props.station.name}</StationName>
      <IndustriesAtStationDetails station={props.station} />{' '}
    </StationDetailsContainer>
  );
};
export const RouteDetails = (props: { trainRoute: TrainRoute }) => {
  console.log('Route Details:', props);
  return (
    <RouteDetailsContainer>
      <RouteName>{props.trainRoute.name}</RouteName>
      {props.trainRoute.stations.map((station: Station) => (
        <StationDetails station={station} key={station.name} />
      ))}
    </RouteDetailsContainer>
  );
};

export const RoutePage = () => {
  const { routeId } = useParams();
  const { trainCollection } = useTrainsData();
  const { routes } = useRoutesData();

  const currentTrain = useReactState<Train>(Train.EMPTY_TRAIN);
  const currentRoute = useReactState<TrainRoute>(TrainRoute.EMPTY_ROUTE);

  useEffect(() => {
    if (routeId === undefined) return;
    currentTrain.setValue(trainCollection.findWithId(routeId));
  });
  useEffect(() => {
    if (routeId === undefined) return;
    const index = routes.findIndex((value) => value.id === routeId);
    if (index == -1) {
      currentRoute.setValue(TrainRoute.EMPTY_ROUTE);
      return;
    }
    currentRoute.setValue(routes[index]);
  });

  return (
    <RoutePageContainer>
      <RoutePageTitle>Route Profile</RoutePageTitle>
      <RouteDetails trainRoute={currentRoute.value} />
    </RoutePageContainer>
  );
};

const RoutePageContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 35px;
  min-height: 95%;
  min-width: 95%;
`;
const RoutePageTitle = styled.div`
  color: ${(props) => props.theme.colors.text.header};
  font-size: large;
  font-weight: bold;
`;
const RouteDetailsContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 45px;
`;
const RouteName = styled.div`
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
