import { RollingStockCollection } from '../RollingStockCollection';
import {
  boxcarCP1234,
  boxcarCP1234State,
  hopperBCAX5,
} from '../../../test-configuration/FixtureRollingStock';

describe('rolling stock collection', () => {
  let collection: RollingStockCollection;
  beforeEach(() => {
    collection = new RollingStockCollection([boxcarCP1234]);
  });

  it('knows it is not Empty ', () => {
    expect(collection.isEmpty()).toEqual(false);
  });
  it('knows it is Empty ', () => {
    const collection = new RollingStockCollection([]);
    expect(collection.isEmpty()).toEqual(true);
  });
  it('can map items', () => {
    const namesList = collection.map((item) => item.displayName);
    expect(namesList).toHaveLength(1);
    expect(namesList).toMatchInAnyOrder(['CPR 1234']);
  });
  it('creates collection from rolling stock state array', () => {
    const stockCollection = RollingStockCollection.createFromRollingStockStateArray([
      boxcarCP1234State,
    ]);
    expect(stockCollection.isEmpty()).toEqual(false);
    expect(stockCollection.count).toEqual(1);
  });

  it('adds a car to the collection', () => {
    collection.addCar(hopperBCAX5);
    expect(collection.count).toEqual(2);
  });
});
