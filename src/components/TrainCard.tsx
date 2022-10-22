import { Train } from '../models/Train';
import styled from '@emotion/styled';

export interface TrainCardProps {
  train: Train;
}

export const TrainCard = ({ train }: TrainCardProps) => {
  const trainDisplayDiv = styled.div`
    color: brown;
  `;

  const TrainNameDiv = styled(trainDisplayDiv)`
    width: 100px;
    background-color: #61dafb;
  `;
  const TrainStationCountDiv = styled(trainDisplayDiv)`
    width: 100px;
    background-color: darkseagreen;
    border: chocolate 2px solid;
  `;
  const FirstStationNameDiv = styled(trainDisplayDiv)`
    width: 300px;
    background-color: bisque;
    color: green;
  `;
  const TrainCardContainer = styled.div`
    flex-direction: column;

    background-color: white;
    display: flex;
    height: 20vh;
    width: 20vh;
  `;

  const TopRow = styled.div`
    display: flex;
    border: red 2px solid;
    justify-content: space-between;
  `;

  return (
    <TrainCardContainer>
      <TopRow>
        <TrainNameDiv>{train.name}</TrainNameDiv>
        <TrainStationCountDiv>{train.stationNames.length} stations</TrainStationCountDiv>
      </TopRow>
      <TopRow>
        <FirstStationNameDiv>{train.stationNames[0]}</FirstStationNameDiv>
      </TopRow>
    </TrainCardContainer>
  );
};
