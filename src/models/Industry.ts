import { CarType, RollingStockState } from './RollingStock';
import { RollingStockCollection } from './collections/RollingStockCollection';
import { CarTypesList } from './collections/CarTypesList';

export interface IndustryState {
  name: string;
  placedCars: RollingStockState[];
  servicedCarTypes: CarTypesList;
}

export class Industry {
  constructor(private industryState: IndustryState) {}

  get name(): string {
    return this.industryState.name;
  }

  get placedCars(): RollingStockCollection {
    return RollingStockCollection.createFromRollingStockStateArray(this.industryState.placedCars);
  }

  services(expectedCarType: CarType): boolean {
    return this.industryState.servicedCarTypes.contains(expectedCarType);
  }
}
