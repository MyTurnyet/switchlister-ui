import {
  eastBlock,
  station1,
  station1State,
  station3,
  station3State,
  westBlock,
} from '../../../test-configuration/FixtureTrains';
import { Station, StationState } from '../../Station';
import { StationCollection } from '../StationCollection';

describe('Station Collection', () => {
  let stationCollection: StationCollection;
  beforeEach(() => {
    stationCollection = new StationCollection([station1, station3]);
  });
  describe('creates', () => {
    it('with Station List', () => {
      expect(stationCollection.count).toEqual(2);
    });
    it('with StationState list', () => {
      const stationStateList: StationState[] = [station1State, station3State];
      const stationCollection = StationCollection.createFromStationStateArray(stationStateList);
      expect(stationCollection.count).toEqual(2);
    });
  });
  describe('with stations', () => {
    it('returns all station names as an array', () => {
      const stationNames: string[] = stationCollection.stationNames;
      expect(stationNames).toMatchInAnyOrder([station1.name, station3.name]);
    });
    it('returns all block names from collection', () => {
      const blockNames: string[] = stationCollection.blockNames;
      expect(blockNames).toMatchInAnyOrder([eastBlock, westBlock]);
    });
    it('gets first station', () => {
      const first: Station = stationCollection.first();
      expect(first).toEqual(station1);
    });
    it('gets station after first', () => {
      const nextStation: Station = stationCollection.stationAfter(station1);
      expect(nextStation).toEqual(station3);
    });
  });

  describe('when empty', () => {
    const emptyCollection = new StationCollection([]);
    it('returns EmptyStation for first', () => {
      expect(emptyCollection.first()).toEqual(Station.EMPTY);
    });
  });
});
