import { IndustryState } from './Industry';
import { IndustryCollection } from './collections/IndustryCollection';

export interface StationState {
  name: string;
  industries: IndustryState[];
}

export class Station {
  constructor(private state: StationState) {}

  get industries(): IndustryCollection {
    return IndustryCollection.createFromIndustryStateArray(this.state.industries);
  }

  get name(): string {
    return this.state.name;
  }
}
