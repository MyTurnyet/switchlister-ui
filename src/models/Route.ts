import { Station, StationState } from './Station';
import { StationCollection } from './collections/StationCollection';

export interface RouteState {
  id: string;
  name: string;
  stations: StationState[];
}

export class Route {
  constructor(private state: RouteState) {
    if (state.stations.length === 0) throw new Error('A Route must have at least one station.');
  }
  get name(): string {
    return this.state.name;
  }

  get stations(): Station[] {
    return this.state.stations.map((value) => new Station(value));
  }

  get stationsCollection(): StationCollection {
    return StationCollection.createFromStationStateArray(this.state.stations);
  }
}
