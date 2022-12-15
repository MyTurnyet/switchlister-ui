import { Industry, IndustryState } from './Industry';
import { IndustryCollection } from './collections/IndustryCollection';

export interface StationState {
  id: string;
  name: string;
  industries: IndustryState[];
}

export class Station {
  private readonly industryCollection: IndustryCollection;

  constructor(private stationState: StationState) {
    this.industryCollection = IndustryCollection.createFromIndustryStateArray(
      this.stationState.industries,
    );
  }

  get id(): string {
    return this.stationState.id;
  }

  get industries(): IndustryCollection {
    return this.industryCollection;
  }

  get name(): string {
    return this.stationState.name;
  }

  getIndustryWithId(industryId: string): Industry {
    return this.industryCollection.findById(industryId);
  }
}
