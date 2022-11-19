import styled from '@emotion/styled';
import { Train } from '../../models/Train';

export interface TrainCardProps {
  train: Train;
}

export const TrainCard = ({ train }: TrainCardProps) => {
  return (
    <CardContainer>
      <TopDisplayRow>
        <NameDiv>{train.name}</NameDiv>
        <StationCountDiv>{train.stationNames.length} stations</StationCountDiv>
      </TopDisplayRow>
      <BottomDisplayRow>
        {train.stationNames.map((trainName: string, index: number) => {
          return <StationNameDiv key={index}>{trainName}</StationNameDiv>;
        })}
      </BottomDisplayRow>
    </CardContainer>
  );
};

const trainDisplayDiv = styled.div`
  color: brown;
`;

const NameDiv = styled(trainDisplayDiv)`
  width: 100px;
`;
const StationCountDiv = styled(trainDisplayDiv)`
  width: 100px;
`;
const StationNameDiv = styled(trainDisplayDiv)`
  width: 100%;
  color: green;
`;

const TopDisplayRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 3;
`;
const BottomDisplayRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 3;
  margin-bottom: 10px;
`;

const CardContainer = styled.div`
  flex-direction: column;
  background-color: white;
  display: flex;
  height: 10vh;
  width: 20vh;
  border: black 1px solid;
  border-radius: 8px;
`;
