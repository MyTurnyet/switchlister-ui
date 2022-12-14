import {
  boxcarCP1234,
  hopperBCAX5,
  hopperBCAX5State,
} from '../../test-configuration/FixtureRollingStock';
import { CarType } from '../RollingStock';

describe('rolling stock', () => {
  describe('data', () => {
    it('is car type HT', () => {
      const hasType = hopperBCAX5.isCarType(CarType.HT);
      expect(hasType).toEqual(true);
    });
    it('is not car type HT', () => {
      const hasType = boxcarCP1234.isCarType(CarType.HT);
      expect(hasType).toEqual(false);
    });
    it('returns display name', () => {
      expect(hopperBCAX5.displayName).toEqual(
        `${hopperBCAX5State.roadName} ${hopperBCAX5State.roadNumber}`,
      );
    });
    it('returns the CarType in caps', () => {
      expect(hopperBCAX5.carType).toEqual('HT');
    });
    it('returns id', () => {
      expect(hopperBCAX5.id).toEqual(hopperBCAX5State.id);
    });
  });
});
