import { RollingStockCollection } from './collections/RollingStockCollection';
import { CarType, RollingStock } from './RollingStock';
import { Station } from './Station';
import { StationBuilder } from './StationBuilder';

export interface TrainState {
  id: string;
  name: string;
}

export class Train {
  private rollingStockCollection = new RollingStockCollection([]);
  private currentTrainStation: Station = StationBuilder.EMPTY_STATION;
  get currentLocation(): Station {
    return this.currentTrainStation;
  }

  get rollingStock(): RollingStockCollection {
    return this.rollingStockCollection;
  }
  constructor(private trainState: TrainState) {}
  get id(): string {
    return this.trainState.id;
  }

  get name(): string {
    return this.trainState.name;
  }

  pickUp(carToPickUp: RollingStock) {
    this.rollingStock.addCar(carToPickUp);
  }

  moveToStation(nextStation: Station) {
    this.currentTrainStation = nextStation;
  }

  hasRollingStockOfType(typeToFind: CarType) {
    return this.rollingStockCollection.containsRollingStockOfType(typeToFind);
  }

  findFirstCarWithType(typeToFind: CarType) {
    return this.rollingStockCollection.findFirstCarWithType(typeToFind);
  }
}
