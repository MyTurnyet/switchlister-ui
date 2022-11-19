import { Train } from '../../models/Train';
import { TrainCard } from './TrainCard';
import { getTrains } from '../../data/getTrains';
import { useNavigate } from 'react-router';

export const TrainGrid = () => {
  const allTrains: Train[] = getTrains();

  return (
    <>
      <div>All Trains</div>
      {allTrains.map((train, index) => {
        return <TrainCard key={index} train={train} />;
      })}
    </>
  );
};
