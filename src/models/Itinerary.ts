import { Train } from './Train';
import { TrainRoute } from './TrainRoute';
import { Station } from './Station';

export class Itinerary {
  private trainLocation: Station;

  constructor(private train: Train, private route: TrainRoute) {
    this.trainLocation = route.stationsCollection.first();
  }

  get name(): string {
    return this.route.name;
  }

  currentTrainLocation(): Station {
    return this.trainLocation;
  }

  isAtLastStation(): boolean {
    return this.route.stationsCollection.isLast(this.currentTrainLocation());
  }
}
