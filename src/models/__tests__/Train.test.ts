import { Train } from '../Train';
import { boxcarCP1234 } from '../../test-configuration/FixtureRollingStock';
import { Station } from '../Station';
import { station1 } from '../../test-configuration/FixtureStations';

describe('Train', () => {
  let train: Train;
  beforeEach(() => {
    train = new Train({ id: 'foo!', name: 'train name' });
  });
  it('always has a name', () => {
    expect(train.name).toEqual('train name');
  });

  describe('rolling stock', () => {
    it('has no attached cars', () => {
      expect(train.rollingStock.count).toEqual(0);
    });
    it('picks up rolling stock', () => {
      train.pickUp(boxcarCP1234);
      expect(train.rollingStock.count).toEqual(1);
      expect(train.rollingStock.contains(boxcarCP1234));
    });
    it('has no attached cars', () => {
      expect(train.rollingStock.count).toEqual(0);
    });
    it('has no station by default', () => {
      expect(train.currentLocation).toEqual(Station.EMPTY);
    });
    it('can be moved to another station', () => {
      train.moveToStation(station1);
      expect(train.currentLocation).toEqual(station1);
    });
  });
});
