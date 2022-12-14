import { CarType, RollingStockState } from './RollingStock';
import { RollingStockCollection } from './collections/RollingStockCollection';

export interface IndustryState {
  maxCarCount: number;
  name: string;
  placedCars: RollingStockState[];
  servicedCarTypes: string[];
}

export class Industry {
  constructor(private industryState: IndustryState) {}

  get maxCarCount(): number {
    return this.industryState.maxCarCount;
  }

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
