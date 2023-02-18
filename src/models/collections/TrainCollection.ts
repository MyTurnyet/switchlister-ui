import { ItemCollection } from './ItemCollection';
import { Train, TrainState } from '../Train';
import { TrainBuilder } from '../TrainBuilder';

export class TrainCollection extends ItemCollection<Train> {
  findWithId(idToFind: string): Train {
    const returnedTrain = this.items.find((train) => train.id === idToFind);
    if (returnedTrain === undefined) {
      return TrainBuilder.EMPTY_TRAIN;
    }
    return returnedTrain;
  }

  static createFromTrainStateArray(trainsStateArray: TrainState[]): TrainCollection {
    const trains = trainsStateArray.map((trainsState: TrainState) => new Train(trainsState));
    return new TrainCollection(trains);
  }
}
