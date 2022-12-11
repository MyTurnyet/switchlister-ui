import { StationState } from './Station';

export interface TrainState {
  id: string;
  name: string;
  stations: StationState[];
}

export class Train {
  public static EMPTY_TRAIN = new Train({ id: '', name: 'EMPTY', stations: [] });
  constructor(private state: TrainState) {}

  get id(): string {
    return this.state.id;
  }

  get name(): string {
    return this.state.name;
  }

  get stationNames(): string[] {
    return this.state.stations.map((station) => station.name);
  }
}
