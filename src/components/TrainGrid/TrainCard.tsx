import { Train } from '../../models/Train';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export interface TrainCardProps {
  train: Train;
}

export const TrainCard = ({ train }: TrainCardProps) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`trains/${train.id}`);
  };

  return (
    <TrainCardContainer onClick={clickHandler}>
      <TopDisplayRow>
        <NameDiv>{train.name}</NameDiv>
        <StationCountDiv>{train.stations.count} stations</StationCountDiv>
      </TopDisplayRow>
      <BottomDisplayRow>
        {train.stations.stationNames.map((stationName: string, index: number) => {
          return <StationNameDiv key={index}>{stationName}</StationNameDiv>;
        })}
      </BottomDisplayRow>
    </TrainCardContainer>
  );
};

const trainDisplayDiv = styled.div`
  color: white;
  font-weight: bold;
`;

const NameDiv = styled(trainDisplayDiv)`
  flex: 4;
`;
const StationCountDiv = styled(trainDisplayDiv)`
  flex: 3;
`;
const StationNameDiv = styled(trainDisplayDiv)`
  width: 100%;
  color: ${(props) => props.theme.colors.text.header};
`;

const trainRowDefaults = styled.div`
  display: flex;
  flex: 3;
  padding: 4px;
`;

const TopDisplayRow = styled(trainRowDefaults)`
  background-color: ${(props) => props.theme.colors.background.cardBackground};
`;
const BottomDisplayRow = styled(trainRowDefaults)`
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const TrainCardContainer = styled.div`
  cursor: pointer;
  width: 12vw;
  height: auto;
  max-height: 15vh;
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.background.cardBackground};
  overflow: auto;
`;
