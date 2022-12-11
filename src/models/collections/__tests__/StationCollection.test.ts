import {
  station1,
  station1State,
  station2,
  station3,
  station3State,
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
      const stationStateList: StationState[] = [station1State, station3State];
      StationCollection.createFromStationStateArray(stationStateList);
    });
  });

  it('returns all station names as an array', () => {
    const stationCollection = new StationCollection([station1, station3]);
    const stationNames: string[] = stationCollection.stationNames;
    expect(stationNames).toMatchInAnyOrder([station1.name, station3.name]);
  });
});
