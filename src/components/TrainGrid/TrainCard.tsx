import styled from '@emotion/styled';
import { Train } from '../../models/Train';
import { useNavigate } from 'react-router';

export interface TrainCardProps {
  train: Train;
}

export const TrainCard = ({ train }: TrainCardProps) => {
  const navigate = useNavigate();

  return (
    <TrainCardContainer onClick={() => navigate(`trains/${train.id}`)}>
      <TopDisplayRow>
        <NameDiv>{train.name}</NameDiv>
        <StationCountDiv>{train.stationNames.length} stations</StationCountDiv>
      </TopDisplayRow>
      <BottomDisplayRow>
        {train.stationNames.map((trainName: string, index: number) => {
          return <StationNameDiv key={index}>{trainName}</StationNameDiv>;
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
  color: green;
`;

const TopDisplayRow = styled.div`
  display: flex;
  flex: 3;
  padding: 4px;
  background-color: darkgreen;
`;
const BottomDisplayRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 3;
  margin-bottom: 10px;
  padding: 4px;
`;

const TrainCardContainer = styled.div`
  width: 12vw;
  background-color: white;
  border: black 1px solid;
  border-radius: 8px;
  overflow: auto;
`;
