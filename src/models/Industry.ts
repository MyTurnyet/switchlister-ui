import { CarType, RollingStock, RollingStockState } from './RollingStock';
import { RollingStockCollection } from './collections/RollingStockCollection';

export interface IndustryState {
  id: string;
  maxCarCount: number;
  name: string;
  placedCars: RollingStockState[];
  servicedCarTypes: string[];
  stationId: string;
}

export class Industry {
  private readonly placeCarCollection: RollingStockCollection;
  static EMPTY: Industry = new Industry({
    id: '',
    maxCarCount: 0,
    name: '',
    placedCars: [],
    servicedCarTypes: [],
    stationId: '',
  });
  constructor(private industryState: IndustryState) {
    this.placeCarCollection = RollingStockCollection.createFromRollingStockStateArray(
      this.industryState.placedCars,
    );
  }

  get id(): string {
    return this.industryState.id;
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
  get staionId(): string {
    return this.industryState.stationId;
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
