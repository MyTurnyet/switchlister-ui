import { ItemCollection } from './ItemCollection';
import {
  CarType,
  RollingStock,
  RollingStockId,
  rollingStockIdsMatch,
  RollingStockState,
} from '../RollingStock';
import { industry1 } from '../../test-configuration/FixtureIndustries';

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

  remove(rollingStockId: RollingStockId): RollingStock {
    const indexToRemove: number = this.items.findIndex((car: RollingStock) =>
      rollingStockIdsMatch(car.id, rollingStockId),
    );
    if (indexToRemove < 0) return RollingStock.EMPTY;
    const removedRollingStock: RollingStock = this.items[indexToRemove];
    this.items.splice(indexToRemove, 1);
    return removedRollingStock;
  }

  containsRollingStockOfType(carTypeToCheck: CarType): boolean {
    return this.items.some((value) => value.isCarType(carTypeToCheck));
  }

  findFirstCarWithType(typeToFind: CarType): RollingStock {
    if (!this.containsRollingStockOfType(typeToFind)) {
      return RollingStock.EMPTY;
    }
    return this.items.find((value) => value.isCarType(typeToFind))!;
  }
}
