import { Industry, IndustryState } from './Industry';
import { IndustryCollection } from './collections/IndustryCollection';

export interface StationState {
  id: string;
  name: string;
}

export class Station {
  constructor(private stationState: StationState) {}

  get id(): string {
    return this.stationState.id;
  }

  get name(): string {
    return this.stationState.name;
  }
}
