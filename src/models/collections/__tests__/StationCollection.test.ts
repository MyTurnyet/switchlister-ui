import {
  eastBlock,
  station1,
  station1State,
  station3,
  station3State,
  westBlock,
} from '../../../test-configuration/FixtureTrains';
import { StationState } from '../../Station';
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
  it('returns all station names as an array', () => {
    const stationNames: string[] = stationCollection.stationNames;
    expect(stationNames).toMatchInAnyOrder([station1.name, station3.name]);
  });
  it('returns all block names from collection', () => {
    const blockNames: string[] = stationCollection.blockNames;
    expect(blockNames).toMatchInAnyOrder([eastBlock, westBlock]);
  });
});
