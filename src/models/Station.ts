import { IndustryState } from './Industry';
import { IndustryCollection } from './collections/IndustryCollection';

export interface StationState {
  id: string;
  name: string;
  industries: IndustryState[];
}

export class Station {
  constructor(private stationState: StationState) {}

  get industries(): IndustryCollection {
    const industryStates = this.stationState.industries;
    return IndustryCollection.createFromIndustryStateArray(industryStates);
  }

  get name(): string {
    return this.stationState.name;
  }
}
