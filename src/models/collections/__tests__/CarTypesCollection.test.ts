import { CarTypesCollection } from '../CarTypesCollection';
import { CarType } from '../../RollingStock';

describe('CarTypeCollection', () => {
  describe('with no items', () => {
    let list: CarTypesCollection;

    beforeEach(() => {
      list = new CarTypesCollection([]);
    });
    it('is empty', () => {
      expect(list.isEmpty()).toEqual(true);
    });
    it('does not contain', () => {
      expect(list.contains(CarType.XM)).toBe(false);
    });
  });

  describe('with 1 item', () => {
    let list: CarTypesCollection;
    beforeEach(() => {
      list = new CarTypesCollection([CarType.XM]);
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
    it('should map to array', () => {
      expect(list.map((typeName) => typeName)).toEqual(['XM']);
    });
  });
});
