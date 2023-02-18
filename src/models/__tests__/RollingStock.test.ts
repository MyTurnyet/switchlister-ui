import {
  boxcarCP1234,
  hopperBCAX5,
  hopperBCAX5State,
} from '../../test-configuration/FixtureRollingStock';
import { rollingStockIdsMatch, CarType, RollingStockId } from '../RollingStock';

describe('rolling stock', () => {
  describe('RollingStockId', () => {
    it('matches', () => {
      const idToMatch: RollingStockId = {
        roadName: 'BCAX',
        roadNumber: 5,
        uuid: hopperBCAX5.id.uuid,
      };
      expect(rollingStockIdsMatch(hopperBCAX5.id, idToMatch)).toEqual(true);
    });
    it('does not match because of uuid', () => {
      const idToMatch: RollingStockId = {
        roadName: 'BCAX',
        roadNumber: 5,
        uuid: '12345',
      };
      expect(rollingStockIdsMatch(hopperBCAX5.id, idToMatch)).toEqual(false);
    });
    it('does not match because of name', () => {
      const idToMatch: RollingStockId = {
        roadName: 'BCAQ',
        roadNumber: 5,
        uuid: hopperBCAX5.id.uuid,
      };
      expect(rollingStockIdsMatch(hopperBCAX5.id, idToMatch)).toEqual(false);
    });
    it('does not match because of number', () => {
      const idToMatch: RollingStockId = {
        roadName: 'BCAX',
        roadNumber: 123,
        uuid: hopperBCAX5.id.uuid,
      };
      expect(rollingStockIdsMatch(hopperBCAX5.id, idToMatch)).toEqual(false);
    });
  });
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
