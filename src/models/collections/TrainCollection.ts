import { ItemCollection } from './ItemCollection';
import { Train } from '../Train';

export class TrainCollection extends ItemCollection<Train> {
  findWithId(expectedId: string): Train {
    const returnedTrain = this.items.find((train) => train.id === expectedId);
    if (returnedTrain === undefined) {
      return Train.EMPTY_TRAIN;
    }
    return returnedTrain;
  }
}
