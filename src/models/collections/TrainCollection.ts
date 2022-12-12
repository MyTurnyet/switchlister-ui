import { ItemCollection } from './ItemCollection';
import { Train, TrainState } from '../Train';

export class TrainCollection extends ItemCollection<Train> {
  findWithId(idToFind: string): Train {
    const returnedTrain = this.items.find((train) => train.id === idToFind);
    if (returnedTrain === undefined) {
      return Train.EMPTY_TRAIN;
    }
    return returnedTrain;
  }

  static createFromTrainStateArray(trainsStateArray: TrainState[]): TrainCollection {
    const trains = trainsStateArray.map((trainsState: TrainState) => new Train(trainsState));
    return new TrainCollection(trains);
  }
}
