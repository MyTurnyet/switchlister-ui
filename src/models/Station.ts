import { Industry, IndustryState } from './Industry';

export interface StationState {
  name: string;
  industries: IndustryState[];
}

export class Station {
  constructor(private state: StationState) {}

  get industries(): Industry[] {
    return this.state.industries.map((industryState) => new Industry(industryState));
  }

  get name(): string {
    return this.state.name;
  }
}
