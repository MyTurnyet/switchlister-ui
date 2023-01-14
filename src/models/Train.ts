import { StationState } from './Station';
import { StationCollection } from './collections/StationCollection';
import { RollingStockCollection } from './collections/RollingStockCollection';
import { RollingStock } from './RollingStock';

export interface TrainState {
  id: string;
  name: string;
  stations: StationState[];
}

export class Train {
  public static EMPTY_TRAIN = new Train({ id: '', name: 'EMPTY', stations: [] });
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

  get stations(): StationCollection {
    const stationStates = this.trainState.stations;
    return StationCollection.createFromStationStateArray(stationStates);
  }

  pickUp(carToPickUp: RollingStock) {
    this.rollingStock.addCar(carToPickUp);
  }
}
