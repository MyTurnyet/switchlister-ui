import { CarType } from '../RollingStock';
import { ItemCollection } from './ItemCollection';

export class CarTypesCollection extends ItemCollection<string> {
  contains(expectedCarType: CarType) {
    return this.items.some((carType: string) => {
      return carType === expectedCarType;
    });
  }
}
