import { Train } from '../Train';
import { boxcarCP1234 } from '../../test-configuration/FixtureRollingStock';

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
  });
});
