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
  const boxcar = new RollingStock(boxcarCP1234);
  const hopper = new RollingStock(hopperBCAX5);
  describe('data', () => {
    it('is car type HT', () => {
      const hasType = hopper.isCarType('HT');
      expect(hasType).toEqual(true);
    });
    it('is not car type HT', () => {
      const hasType = boxcar.isCarType('HT');
      expect(hasType).toEqual(false);
    });
    it('returns display name', () => {
      expect(hopper.displayName).toEqual(`${hopperBCAX5.roadName} ${hopperBCAX5.roadNumber}`);
    });
  });
});
