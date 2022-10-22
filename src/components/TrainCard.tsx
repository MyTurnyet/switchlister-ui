import { Train } from '../models/Train';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

  const dynamicStyle = (props: { flex: number }) => {
    return css`
      flex: ${props.flex};
    `;
  };
  const DisplayRow = styled.div`
    display: flex;
    justify-content: space-between;
    ${dynamicStyle};
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
      <DisplayRow flex={3}>
        <NameDiv>{train.name}</NameDiv>
        <StationCountDiv>{train.stationNames.length} stations</StationCountDiv>
      </DisplayRow>
      <DisplayRow flex={2}>
        <StationNameDiv>{train.stationNames[0]}</StationNameDiv>
      </DisplayRow>
    </CardContainer>
  );
};
