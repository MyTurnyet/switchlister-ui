import { v4 as uuidv4 } from 'uuid';

export interface TrainState {
  id: string;
  name: string;
  stations: string[];
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
    return this.state.stations;
  }
}
