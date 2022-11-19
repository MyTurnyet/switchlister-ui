import { RollingStock, RollingStockState } from '../RollingStock';

describe('rolling stock', () => {
  const hopperBCAX5: RollingStockState = {
    carType: 'HT',
    color: 'WHT',
    roadName: 'BCAX',
    roadNumber: 5,
    length: 52,
    loaded: false,
  };
  const boxcarCP1234: RollingStockState = {
    carType: 'XM',
    color: 'RED',
    roadName: 'CPR',
    roadNumber: 1234,
    length: 52,
    loaded: false,
  };
  it('is car type HT', () => {
    const hopper = new RollingStock(hopperBCAX5);
    const hasType = hopper.isCarType('HT');
    expect(hasType).toEqual(true);
  });
  it('is not car type HT', () => {
    const hopper = new RollingStock(boxcarCP1234);
    const hasType = hopper.isCarType('HT');
    expect(hasType).toEqual(false);
  });
});
