import {
  station1,
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
});
