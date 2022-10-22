import { Train } from '../models/Train';
import { TrainCard } from './TrainCard';

export const TrainGrid = (props: { trains: Train[] }) => {
  return (
    <>
      {props.trains.map((train, index) => {
        return <TrainCard key={index} train={train} />;
      })}
    </>
  );
};
