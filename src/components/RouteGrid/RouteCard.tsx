import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Route } from '../../models/Route';
import { Station } from '../../models/Station';

export interface RouteCardProps {
  route: Route;
}

export const RouteCard = ({ route }: RouteCardProps) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`trains/${route.id}`);
  };

  return (
    <RouteCardContainer onClick={clickHandler}>
      <TopDisplayRow>
        <NameDiv>{route.name}</NameDiv>
        <StationCountDiv>{route.stations.length} stations</StationCountDiv>
      </TopDisplayRow>
      <BottomDisplayRow>
        {route.stations.map((station: Station, index: number) => {
          return <StationNameDiv key={index}>{station.name}</StationNameDiv>;
        })}
      </BottomDisplayRow>
    </RouteCardContainer>
  );
};

const routeDisplayDiv = styled.div`
  color: white;
  font-weight: bold;
`;

const NameDiv = styled(routeDisplayDiv)`
  flex: 4;
`;
const StationCountDiv = styled(routeDisplayDiv)`
  flex: 3;
`;
const StationNameDiv = styled(routeDisplayDiv)`
  width: 100%;
  color: ${(props) => props.theme.colors.text.header};
`;

const routeRowDefaults = styled.div`
  display: flex;
  flex: 3;
  padding: 4px;
`;

const TopDisplayRow = styled(routeRowDefaults)`
  background-color: ${(props) => props.theme.colors.background.cardBackground};
`;
const BottomDisplayRow = styled(routeRowDefaults)`
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const RouteCardContainer = styled.div`
  cursor: pointer;
  width: 12vw;
  height: auto;
  max-height: 15vh;
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.background.cardBackground};
  overflow: auto;
`;
