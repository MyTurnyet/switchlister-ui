import { Station } from './Station';
import { StationCollection } from './collections/StationCollection';

export class Route {
  private stationCollection: StationCollection;
  constructor(private routeStations: Station[]) {
    if (routeStations.length === 0) throw new Error('A Route must have at least one station.');
    this.stationCollection = new StationCollection(routeStations);
  }

  get stations(): Station[] {
    return this.routeStations;
  }
  get stationsCollection(): StationCollection {
    return this.stationCollection;
  }
}
