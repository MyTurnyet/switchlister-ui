import { Train } from '../../models/Train';
import { TrainCard } from './TrainCard';
import { getTrains } from '../../data/getTrains';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

export const TrainGrid = () => {
  const navigate = useNavigate();
  const allTrains: Train[] = getTrains();

  return (
    <div>
      <div onClick={() => navigate('rollingstock')}>Rolling Stock Page</div>
      <TrainGridHeader>All Trains</TrainGridHeader>
      <TrainCardGrid>
        {allTrains.map((train, index) => {
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
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-around;
`;
