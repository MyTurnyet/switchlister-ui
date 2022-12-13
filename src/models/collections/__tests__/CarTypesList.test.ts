import { CarTypesList } from '../CarTypesList';
import { CarType } from '../../RollingStock';

describe('CarTypesList', () => {
  describe('with no items', () => {
    let list: CarTypesList;

    beforeEach(() => {
      list = new CarTypesList();
    });
    it('is empty', () => {
      expect(list.isEmpty()).toEqual(true);
    });
    it('does not contain', () => {
      expect(list.contains(CarType.XM)).toBe(false);
    });
  });

  describe('with 1 item', () => {
    let list: CarTypesList;
    beforeEach(() => {
      list = new CarTypesList([CarType.XM]);
    });
    it('is not empty', () => {
      expect(list.isEmpty()).toEqual(false);
    });
    it('contains XM type', () => {
      expect(list.contains(CarType.XM)).toEqual(true);
    });
    it('does not contain HT type', () => {
      expect(list.contains(CarType.HT)).toEqual(false);
    });
  });
});
