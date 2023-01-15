import { Train } from './Train';
import { Route } from './Route';
import { Station } from './Station';

export class Itinerary {
  private trainLocation: Station;
  constructor(private train: Train, private route: Route) {
    this.trainLocation = route.stations[0];
  }

  currentTrainLocation(): Station {
    return this.trainLocation;
  }
}
