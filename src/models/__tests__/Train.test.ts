import { Train } from '../Train';
import { boxcarCP1234 } from '../../test-configuration/FixtureRollingStock';
import { Station } from '../Station';
import { station1 } from '../../test-configuration/FixtureStations';
import { CarType, RollingStock } from '../RollingStock';
import { StationBuilder } from '../StationBuilder';
import { TrainBuilder } from '../TrainBuilder';

describe('Train', () => {
  let train: Train;
  beforeEach(() => {
    train = new TrainBuilder().name('train name').toTrain();
  });
  it('always has a name', () => {
    expect(train.name).toEqual('train name');
  });
  it('has no station by default', () => {
    expect(train.currentLocation).toEqual(StationBuilder.EMPTY_STATION);
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
      const foundCar: RollingStock = train.findFirstCarWithType(CarType.XM);
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
      expect(train.findFirstCarWithType(CarType.XM)).toEqual(RollingStock.EMPTY);
    });
  });
});
