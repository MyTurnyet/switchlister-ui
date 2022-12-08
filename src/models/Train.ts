export interface TrainState {
  name: string;
  stations: string[];
}

export class Train {
  constructor(private state: TrainState) {}

  public get name(): string {
    return this.state.name;
  }
  public get stationNames(): string[] {
    return this.state.stations;
  }
}
