import { Train } from './Train';
import { Route } from './Route';
import { Station } from './Station';

export class Itinerary {
  constructor(private train: Train, private route: Route) {}

  currentTrainLocation(): Station {
    return this.route.stations[0];
  }
}
