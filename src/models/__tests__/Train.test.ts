import { Train } from '../Train';
import { boxcarCP1234 } from '../../test-configuration/FixtureRollingStock';
import { Station } from '../Station';
import { station1 } from '../../test-configuration/FixtureStations';
import { CarType, RollingStock } from '../RollingStock';

describe('Train', () => {
  let train: Train;
  beforeEach(() => {
    train = new Train({ id: 'foo!', name: 'train name' });
  });
  it('always has a name', () => {
    expect(train.name).toEqual('train name');
  });
  it('has no station by default', () => {
    expect(train.currentLocation).toEqual(Station.EMPTY);
  });
  it('can be moved to another station', () => {
    train.moveToStation(station1);
    expect(train.currentLocation).toEqual(station1);
  });

  describe('with rolling stock', () => {
    beforeEach(() => {
      train.pickUp(boxcarCP1234);
    });
    it('has attached cars', () => {
      expect(train.rollingStock.count).toEqual(1);
      expect(train.rollingStock.contains(boxcarCP1234));
    });
    it('gets first car of type', () => {
      const hasRollingStock: boolean = train.hasRollingStockOfType(CarType.XM);
      expect(hasRollingStock).toEqual(true);
      const foundCar: RollingStock = train.findFirstCarByType(CarType.XM);
      expect(foundCar).toEqual(boxcarCP1234);
    });
  });

  describe('without rolling stock', () => {
    it('has no attached cars', () => {
      expect(train.rollingStock.count).toEqual(0);
    });

    it('does not have rolling stock of type XM', () => {
      const hasRollingStock: boolean = train.hasRollingStockOfType(CarType.XM);
      expect(hasRollingStock).toEqual(false);
      expect(train.findFirstCarByType(CarType.XM)).toEqual(RollingStock.EMPTY);
    });
  });
});
