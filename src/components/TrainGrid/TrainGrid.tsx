import { TrainCard } from './TrainCard';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { useTrainsData } from '../../data/TrainsContext';

export const TrainGrid = () => {
  const navigate = useNavigate();
  const { trains } = useTrainsData();

  return (
    <div>
      <div onClick={() => navigate('rollingstock')}>Rolling Stock Page</div>
      <TrainGridHeader>All Trains</TrainGridHeader>
      <TrainCardGrid>
        {trains.map((train, index) => {
          return <TrainCard key={index} train={train} />;
        })}
      </TrainCardGrid>
    </div>
  );
};

const TrainGridHeader = styled.div`
  color: white;
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
