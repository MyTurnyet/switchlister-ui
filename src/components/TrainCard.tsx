import { Train } from '../models/Train';
import styled from '@emotion/styled';

export interface TrainCardProps {
  train: Train;
}

export const TrainCard = ({ train }: TrainCardProps) => {
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

  return (
    <CardContainer>
      <TopDisplayRow>
        <NameDiv>{train.name}</NameDiv>
        <StationCountDiv>{train.stationNames.length} stations</StationCountDiv>
      </TopDisplayRow>
      <BottomDisplayRow>
        <StationNameDiv>{train.stationNames[0]}</StationNameDiv>
        <StationNameDiv>{train.stationNames[1]}</StationNameDiv>
      </BottomDisplayRow>
    </CardContainer>
  );
};
