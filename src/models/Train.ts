import { randomUUID } from 'crypto';

export interface TrainState {
  name: string;
  stations: string[];
}

export class Train {
  private readonly trainId: string;
  constructor(private state: TrainState) {
    this.trainId = randomUUID();
  }

  public get id(): string {
    return this.trainId;
  }

  public get name(): string {
    return this.state.name;
  }
  public get stationNames(): string[] {
    return this.state.stations;
  }
}
