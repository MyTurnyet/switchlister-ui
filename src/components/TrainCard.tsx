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
    background-color: #61dafb;
  `;
  const StationCountDiv = styled(trainDisplayDiv)`
    width: 100px;
    background-color: darkseagreen;
    border: chocolate 2px solid;
  `;
  const StationNameDiv = styled(trainDisplayDiv)`
    width: 100%;
    background-color: bisque;
    color: green;
  `;
  const DisplayRow = styled.div`
    display: flex;
    border: red 2px solid;
    justify-content: space-between;
  `;

  const CardContainer = styled.div`
    flex-direction: column;
    background-color: white;
    display: flex;
    height: 10vh;
    width: 20vh;
  `;

  return (
    <CardContainer>
      <DisplayRow>
        <NameDiv>{train.name}</NameDiv>
        <StationCountDiv>{train.stationNames.length} stations</StationCountDiv>
      </DisplayRow>
      <DisplayRow>
        <StationNameDiv>{train.stationNames[0]}</StationNameDiv>
      </DisplayRow>
    </CardContainer>
  );
};
