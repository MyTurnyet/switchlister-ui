export interface StationState {
  id: string;
  name: string;
  block: string;
}

export class Station {
  constructor(private stationState: StationState) {}
  get id(): string {
    return this.stationState.id;
  }

  get block(): string {
    return this.stationState.block;
  }

  get name(): string {
    return this.stationState.name;
  }
}
