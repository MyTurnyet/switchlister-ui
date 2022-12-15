import { IndustryCollection } from '../IndustryCollection';
import {
  industryXmHtNoCars,
  industryXmHtNoCarsState,
} from '../../../test-configuration/FixtureTrains';

describe('Industry Collection', () => {
  describe('creates collection', () => {
    it('from an empty industry array', () => {
      const collection = new IndustryCollection([]);
      expect(collection.isEmpty()).toEqual(true);
    });
    it('from industry array with one item', () => {
      const collection = new IndustryCollection([industryXmHtNoCars]);
      expect(collection.isEmpty()).toEqual(false);
      expect(collection.count).toEqual(1);
    });
    it('from a IndustryState array', () => {
      const industryCollectionFromStateArray = IndustryCollection.createFromIndustryStateArray([
        industryXmHtNoCarsState,
      ]);
      expect(industryCollectionFromStateArray.isEmpty()).toEqual(false);
      expect(industryCollectionFromStateArray.count).toEqual(1);
    });
    it('finds by id', () => {
      const collection = new IndustryCollection([industryXmHtNoCars]);
      collection.findById(industryXmHtNoCarsState.id);
    });
  });
});
