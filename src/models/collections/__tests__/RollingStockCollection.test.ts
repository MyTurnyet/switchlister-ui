import { RollingStockCollection } from '../RollingStockCollection';
import {
  boxcarCP1234,
  boxcarCP1234State,
  hopperBCAX5,
} from '../../../test-configuration/FixtureRollingStock';
import { CarType, RollingStock } from '../../RollingStock';

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
    expect(collection.contains(hopperBCAX5)).toEqual(true);
    expect(collection.contains(boxcarCP1234)).toEqual(true);
  });
  it('removes a car based on Id from the collection', () => {
    const rollingStock = collection.remove(boxcarCP1234.id);
    expect(collection.count).toEqual(0);
    expect(rollingStock).toEqual(boxcarCP1234);
  });
  it('contains rolling stock of type XM', () => {
    const containsCarType = collection.containsRollingStockOfType(CarType.XM);
    expect(containsCarType).toEqual(true);
  });
  it('does not contain rolling stock of type HT', () => {
    const containsCarType = collection.containsRollingStockOfType(CarType.HT);
    expect(containsCarType).toEqual(false);
  });
  describe('gets car by type', () => {
    it('returns RollingStock.Empty is non-existant', () => {
      const carReturned: RollingStock = collection.getCarByType(CarType.HT);
      expect(carReturned).toEqual(RollingStock.EMPTY);
    });
    it('returns first rolling stock is it matches car type', () => {
      const carReturned: RollingStock = collection.getCarByType(CarType.XM);
      expect(carReturned).toEqual(boxcarCP1234);
    });
  });
});
