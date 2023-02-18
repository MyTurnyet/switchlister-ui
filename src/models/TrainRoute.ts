import { Station, StationState } from './Station';
import { StationCollection } from './collections/StationCollection';
import { StationBuilder } from './StationBuilder';

export interface RouteState {
  id: string;
  name: string;
  stations: StationState[];
}

export class TrainRoute {
  public static EMPTY_ROUTE: TrainRoute = new TrainRoute({
    id: '',
    name: 'Route Missing',
    stations: [],
  });
  constructor(private state: RouteState) {}

  get id(): string {
    return this.state.id;
  }
  get name(): string {
    return this.state.name;
  }

  get stations(): Station[] {
    return this.state.stations.map((value) => new StationBuilder(value).toStation());
  }

  get stationsCollection(): StationCollection {
    return StationCollection.createFromStationStateArray(this.state.stations);
  }
}
