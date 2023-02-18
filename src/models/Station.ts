export interface StationState {
  block: string;
  id: string;
  name: string;
}

export class Station {
  constructor(private stationState: StationState) {}

  get block(): string {
    return this.stationState.block;
  }

  get id(): string {
    return this.stationState.id;
  }

  get name(): string {
    return this.stationState.name;
  }
}
