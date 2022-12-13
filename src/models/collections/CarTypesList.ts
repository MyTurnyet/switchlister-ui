import { ItemList } from './ItemList';
import { CarType } from '../RollingStock';

export class CarTypesList extends ItemList<CarType> {
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
