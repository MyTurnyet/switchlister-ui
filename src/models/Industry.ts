import { RollingStockState } from './RollingStock';

export interface IndustryState {
  name: string;
  placedCars: RollingStockState[];
}

export class Industry {
  constructor(private industryState: IndustryState) {}

  get name(): string {
    return this.industryState.name;
  }
}
