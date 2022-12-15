import { ItemCollection } from './ItemCollection';
import { RollingStock, RollingStockState } from '../RollingStock';

export class RollingStockCollection extends ItemCollection<RollingStock> {
  static createFromRollingStockStateArray(stateArray: RollingStockState[]): RollingStockCollection {
    const rollingStockArray = stateArray.map(
      (rollingStockState: RollingStockState) => new RollingStock(rollingStockState),
    );
    return new RollingStockCollection(rollingStockArray);
  }

  addCar(carToAdd: RollingStock): void {
    this.items.push(carToAdd);
  }

  remove(carToRemove: RollingStock) {
    const indexToRemove = this.items.findIndex((car: RollingStock) => car.id === carToRemove.id);
    if (indexToRemove < 0) return;
    this.items.splice(indexToRemove, 1);
  }
}
