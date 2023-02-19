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

  isEqualTo(other: Station): boolean {
    return (
      other !== undefined &&
      other.id === this.id &&
      other.name === this.name &&
      other.block == this.block
    );
  }
}
