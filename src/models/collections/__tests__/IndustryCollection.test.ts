import {
  IndustryCollection,
  IndustryCollectionBuilder,
  NeededCarTypesDictionary,
} from '../IndustryCollection';
import {
  industry1,
  industry1State,
  industry4,
  industry4State,
  station2,
  station4,
} from '../../../test-configuration/FixtureTrains';

describe('Industry Collection', () => {
  describe('creates collection', () => {
    it('from an empty industry array', () => {
      const collection = new IndustryCollection([]);
      expect(collection.isEmpty()).toEqual(true);
    });
    it('from industry array with one item', () => {
      const collection = new IndustryCollection([industry1]);
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
      const collection = new IndustryCollection([industry1]);
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
      expect(industriesForStation.findById(industry4State.id)).toEqual(industry4);
    });
    it('returns carTypes used by collection', () => {
      const collection = new IndustryCollectionBuilder().addFromState(industry4State).build();
      const neededCarTypes: NeededCarTypesDictionary = collection.neededCarTypes();
      expect(neededCarTypes).toEqual({ XMO: 1 });
    });
  });
});
