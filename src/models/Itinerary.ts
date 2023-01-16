import { Train } from './Train';
import { TrainRoute } from './TrainRoute';
import { Station } from './Station';

export class Itinerary {
  private trainLocation: Station;
  constructor(private train: Train, private route: TrainRoute) {
    this.trainLocation = route.stations[0];
  }

  currentTrainLocation(): Station {
    return this.trainLocation;
  }
}
