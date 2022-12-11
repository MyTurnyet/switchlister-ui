import { RollingStockState } from './RollingStock';
import { RollingStockCollection } from './collections/RollingStockCollection';

export interface IndustryState {
  name: string;
  placedCars: RollingStockState[];
}

export class Industry {
  constructor(private industryState: IndustryState) {}

  get name(): string {
    return this.industryState.name;
  }

  get placedCars(): RollingStockCollection {
    return RollingStockCollection.createFromRollingStockStateArray(this.industryState.placedCars);
  }
}
