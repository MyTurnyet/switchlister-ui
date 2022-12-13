import { CarType, RollingStockState } from './RollingStock';
import { RollingStockCollection } from './collections/RollingStockCollection';
import { CarTypesCollection } from './collections/CarTypesCollection';

export interface IndustryState {
  name: string;
  placedCars: RollingStockState[];
  servicedCarTypes: string[];
}

export class Industry {
  constructor(private industryState: IndustryState) {}
  get name(): string {
    return this.industryState.name;
  }

  get placedCars(): RollingStockCollection {
    return RollingStockCollection.createFromRollingStockStateArray(this.industryState.placedCars);
  }

  get servicedCarTypes(): string[] {
    return this.industryState.servicedCarTypes.map((carType) => carType.toString());
  }

  services(expectedCarType: CarType): boolean {
    return this.industryState.servicedCarTypes.some(
      (servicedCars) => servicedCars === expectedCarType,
    );
  }
}
