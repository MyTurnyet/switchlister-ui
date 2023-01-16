import { Train } from '../../models/Train';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export interface RouteCardProps {
  train: Train;
}

export const RouteCard = ({ train }: RouteCardProps) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`trains/${train.id}`);
  };

  return (
    <RouteCardContainer onClick={clickHandler}>
      <TopDisplayRow>
        <NameDiv>{train.name}</NameDiv>
        <StationCountDiv>{train.stations.count} stations</StationCountDiv>
      </TopDisplayRow>
      <BottomDisplayRow>
        {train.stations.stationNames.map((stationName: string, index: number) => {
          return <StationNameDiv key={index}>{stationName}</StationNameDiv>;
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
