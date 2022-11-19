import { boxcarCP1234, hopperBCAX5, hopperBCAX5State } from '../../__tests__/FixtureRollingStock';

describe('rolling stock', () => {
  describe('data', () => {
    it('is car type HT', () => {
      const hasType = hopperBCAX5.isCarType('HT');
      expect(hasType).toEqual(true);
    });
    it('is not car type HT', () => {
      const hasType = boxcarCP1234.isCarType('HT');
      expect(hasType).toEqual(false);
    });
    it('returns display name', () => {
      expect(hopperBCAX5.displayName).toEqual(
        `${hopperBCAX5State.roadName} ${hopperBCAX5State.roadNumber}`,
      );
    });
  });
});
