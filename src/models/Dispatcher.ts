import { TrainRoute } from './TrainRoute';
import { Train } from './Train';

export class Dispatcher {
  constructor(private train: Train, private trainRoute: TrainRoute) {
    train.moveToStation(trainRoute.stationsCollection.first());
  }
}
