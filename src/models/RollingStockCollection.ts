import { ItemCollection } from './ItemCollection';
import { RollingStock } from './RollingStock';

export class RollingStockCollection extends ItemCollection<RollingStock> {
  create(items: RollingStock[]): ItemCollection<RollingStock> {
    return new RollingStockCollection(items);
  }
}
