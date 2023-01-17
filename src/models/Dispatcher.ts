import { TrainRoute } from './TrainRoute';
import { Train } from './Train';

export class Dispatcher {
  private assignedTrain: Train = Train.EMPTY_TRAIN;

  constructor(private trainRoute: TrainRoute) {}

  assignTrain(assignedTrain: Train) {
    this.assignedTrain = assignedTrain;
    this.assignedTrain.moveToStation(this.trainRoute.stationsCollection.first());
  }
}
