import { CarType, RollingStock, RollingStockState } from './RollingStock';
import { RollingStockCollection } from './collections/RollingStockCollection';

export interface IndustryState {
  id: string;
  maxCarCount: number;
  name: string;
  placedCars: RollingStockState[];
  servicedCarTypes: string[];
}

export class Industry {
  private readonly placeCarCollection: RollingStockCollection;
  constructor(private industryState: IndustryState) {
    this.placeCarCollection = RollingStockCollection.createFromRollingStockStateArray(
      this.industryState.placedCars,
    );
  }

  get maxCarCount(): number {
    return this.industryState.maxCarCount;
  }

  get name(): string {
    return this.industryState.name;
  }

  get placedCars(): RollingStockCollection {
    return this.placeCarCollection;
  }

  get servicedCarTypes(): string[] {
    return this.industryState.servicedCarTypes.map((carType) => carType.toString());
  }

  servicesCarType(expectedCarType: CarType): boolean {
    return this.industryState.servicedCarTypes.some(
      (servicedCars) => servicedCars === expectedCarType,
    );
  }

  setOut(rollingStockToPlace: RollingStock) {
    this.placedCars.addCar(rollingStockToPlace);
  }
}
