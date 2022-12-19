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

  remove(carToRemove: RollingStock): RollingStock {
    const indexToRemove: number = this.items.findIndex(
      (car: RollingStock) => car.id === carToRemove.id,
    );
    if (indexToRemove < 0) return RollingStock.EMPTY;
    const removedRollingStock: RollingStock = this.items.find(
      (car: RollingStock) => car.id === carToRemove.id,
    )!;
    this.items.splice(indexToRemove, 1);
    return removedRollingStock;
  }
}
