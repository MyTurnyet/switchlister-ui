import { IndustryState } from './Industry';
import { IndustryCollection } from './collections/IndustryCollection';

export interface StationState {
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

  asStationState(): StationState {
    return JSON.parse(JSON.stringify(this.stationState));
  }
}
