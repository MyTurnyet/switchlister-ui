import { RollingStockCollection } from '../RollingStockCollection';
import { boxcarCP1234, hopperBCAX5 } from '../../../test-configuration/FixtureRollingStock';

describe('rolling stock collection', () => {
  const collection = new RollingStockCollection([boxcarCP1234, hopperBCAX5]);
  it('knows it is not Empty ', () => {
    expect(collection.isEmpty()).toEqual(false);
  });
  it('knows it is Empty ', () => {
    const collection = new RollingStockCollection([]);
    expect(collection.isEmpty()).toEqual(true);
  });
  it('can map items', () => {
    const namesList = collection.map((item) => item.displayName);
    expect(namesList).toHaveLength(2);
    expect(namesList).toMatchInAnyOrder(['BCAX 5', 'CPR 1234']);
  });
});
