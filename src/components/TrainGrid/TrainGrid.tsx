import { TrainCard } from './TrainCard';
import { useTrainsData } from '../../data/TrainsContext';
import styled from 'styled-components';

export const TrainGrid = () => {
  const { trainCollection } = useTrainsData();

  return (
    <div>
      <TrainGridHeader>All Trains</TrainGridHeader>
      <TrainCardGrid>
        {trainCollection.map((train) => {
          return <TrainCard key={train.id} train={train} />;
        })}
      </TrainCardGrid>
    </div>
  );
};

const TrainGridHeader = styled.div`
  color: ${(props) => props.theme.colors.text.header};
  font-size: large;
  font-weight: bold;
`;
const TrainCardGrid = styled.div`
  padding-top: 15px;
  padding-bottom: 35px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 85vh;
  min-width: 90vw;
`;
