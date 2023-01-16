import { RollingStockCollection } from './collections/RollingStockCollection';
import { RollingStock } from './RollingStock';

export interface TrainState {
  id: string;
  name: string;
}

export class Train {
  public static EMPTY_TRAIN = new Train({ id: '', name: 'EMPTY' });
  private rollingStockCollection = new RollingStockCollection([]);

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
}
