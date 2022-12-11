import { ItemCollection } from './ItemCollection';
import { Train } from '../Train';

export class TrainCollection extends ItemCollection<Train> {
  findWithId(idToFind: string): Train {
    const returnedTrain = this.items.find((train) => train.id === idToFind);
    if (returnedTrain === undefined) {
      return Train.EMPTY_TRAIN;
    }
    return returnedTrain;
  }
}
