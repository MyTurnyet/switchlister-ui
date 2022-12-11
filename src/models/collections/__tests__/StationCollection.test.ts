import {
  station1,
  station14,
  station14State,
  station1State,
  station2,
} from '../../../test-configuration/FixtureTrains';
import { Station, StationState } from '../../Station';
import { StationCollection } from '../StationCollection';

describe('Station Collection', () => {
  describe('creates', () => {
    it('with Station List', () => {
      const stationList: Station[] = [station1, station2];
      const collection = new StationCollection(stationList);
      expect(collection.count).toEqual(2);
    });
    it('with StationState list', () => {
      const stationStateList: StationState[] = [station1State, station14State];
      StationCollection.createFromStationStateArray(stationStateList);
    });
  });

  it('returns all station names as an array', () => {
    const stationCollection = new StationCollection([station1, station14]);
    const stationNames: string[] = stationCollection.stationNames;
    expect(stationNames).toMatchInAnyOrder([station1.name, station14.name]);
  });
});
