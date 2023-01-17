import { RollingStockCollection } from './collections/RollingStockCollection';
import { CarType, RollingStock } from './RollingStock';
import { Station } from './Station';

export interface TrainState {
  id: string;
  name: string;
}

export class Train {
  public static EMPTY_TRAIN = new Train({ id: '', name: 'EMPTY' });
  private rollingStockCollection = new RollingStockCollection([]);
  private currentTrainStation: Station = Station.EMPTY;
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

  findFirstCarByType(typeToFind: CarType) {
    return this.rollingStockCollection.getCarByType(typeToFind);
  }
}
