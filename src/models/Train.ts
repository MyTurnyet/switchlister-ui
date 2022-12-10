import { Station } from './Station';

export interface TrainState {
  id: string;
  name: string;
  stations: Station[];
}

export class Train {
  public static EMPTY_TRAIN = new Train({ id: '', name: 'EMPTY', stations: [] });
  constructor(private state: TrainState) {}

  public get id(): string {
    return this.state.id;
  }

  public get name(): string {
    return this.state.name;
  }
  public get stationNames(): string[] {
    return this.state.stations.map((station) => station.name);
  }
}
