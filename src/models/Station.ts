export interface StationState {
  name: string;
  industries: string[];
}

export class Station {
  constructor(private state: StationState) {}

  get name(): string {
    return this.state.name;
  }
}
