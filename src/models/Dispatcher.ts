import { TrainRoute } from './TrainRoute';
import { Train } from './Train';
import { TrainBuilder } from './TrainBuilder';

export class Dispatcher {
  private assignedTrain: Train = TrainBuilder.EMPTY_TRAIN;

  constructor(private trainRoute: TrainRoute) {}

  assignTrain(assignedTrain: Train) {
    this.assignedTrain = assignedTrain;
    this.assignedTrain.moveToStation(this.trainRoute.stations.first());
  }
}
