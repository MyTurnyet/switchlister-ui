import { Train } from './Train';
import { TrainRoute } from './TrainRoute';
import { Station } from './Station';
import { StationCollection } from './collections/StationCollection';

export class Itinerary {
  private trainLocation: Station;
  private unvisitedStations: StationCollection;
  constructor(private train: Train, private route: TrainRoute) {
    this.trainLocation = route.stations.first();
    this.unvisitedStations = route.stations;
  }

  activeStations(): StationCollection {
    return this.unvisitedStations;
  }

  currentTrainLocation(): Station {
    return this.trainLocation;
  }

  isAtLastStation(): boolean {
    return this.route.stations.isLast(this.currentTrainLocation());
  }

  moveToNextStation(): void {
    if (this.route.stations.isLast(this.trainLocation)) return;
    this.activeStations().remove(this.trainLocation);
    this.trainLocation = this.route.stations.stationAfter(this.trainLocation);
  }

  get name(): string {
    return this.route.name;
  }
}
