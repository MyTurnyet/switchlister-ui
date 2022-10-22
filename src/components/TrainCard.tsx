import { Train } from '../models/Train';

export interface TrainCardProps {
  train: Train;
}

export const TrainCard = ({ train }: TrainCardProps) => {
  return (
    <div>
      <div>{train.name}</div>
      <div>{train.stationNames.length} stations</div>
      <div>{train.stationNames[0]}</div>
    </div>
  );
};
