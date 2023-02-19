import { Train } from './Train';
import { TrainRoute } from './TrainRoute';
import { Station } from './Station';

export class Itinerary {
  private trainLocation: Station;

  constructor(private train: Train, private route: TrainRoute) {
    this.trainLocation = route.stations.first();
  }

  get name(): string {
    return this.route.name;
  }

  currentTrainLocation(): Station {
    return this.trainLocation;
  }

  isAtLastStation(): boolean {
    return this.route.stations.isLast(this.currentTrainLocation());
  }

  moveToNextStation(): void {
    if (this.route.stations.isLast(this.trainLocation)) return;
    this.trainLocation = this.route.stations.stationAfter(this.trainLocation);
  }
}
