import { IndustryCollection, IndustryCollectionBuilder } from '../IndustryCollection';
import {
  industryXmHtNoCars,
  industry1State,
  industryXmoNoCars,
  station1,
  station2,
  industry6State,
  industry4State,
  station4,
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
        industry1State,
      ]);
      expect(industryCollectionFromStateArray.isEmpty()).toEqual(false);
      expect(industryCollectionFromStateArray.count).toEqual(1);
    });
    it('finds by id', () => {
      const collection = new IndustryCollection([industryXmHtNoCars]);
      collection.findById(industry1State.id);
    });
    it('returns 0 industries for a station with No Industries', () => {
      const collection = new IndustryCollectionBuilder().addFromState(industry1State).build();
      const industriesForStation: IndustryCollection = collection.getIndustriesForStation(station2);
      expect(industriesForStation.isEmpty()).toEqual(true);
    });
    it('returns industries by station', () => {
      const collection = new IndustryCollectionBuilder().addFromState(industry4State).build();
      const industriesForStation: IndustryCollection = collection.getIndustriesForStation(station4);
      expect(industriesForStation.findById(industry4State.id)).toEqual(industryXmoNoCars);
    });
  });
});
