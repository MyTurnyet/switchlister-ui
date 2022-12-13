import { CarTypesList } from '../CarTypesList';
import { CarType } from '../../RollingStock';

describe('CarTypesList', () => {
  it('constructs with no items', () => {
    const list = new CarTypesList();
    expect(list.isEmpty()).toEqual(true);
  });
  it('knows its length', () => {
    const list = new CarTypesList([CarType.XM]);
    expect(list.isEmpty()).toEqual(false);
  });
});
