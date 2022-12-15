import {
  industryXmHtNoCars,
  station1,
  station1State,
  station3,
  station3State,
} from '../../../test-configuration/FixtureTrains';
import { StationState } from '../../Station';
import { StationCollection } from '../StationCollection';
import { Industry } from '../../Industry';

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
  it('finds an industry among all stations', () => {
    const industry: Industry = stationCollection.findIndustry(industryXmHtNoCars.id);
    expect(industry).toEqual(industryXmHtNoCars);
  });
  it('returns all station names as an array', () => {
    const stationNames: string[] = stationCollection.stationNames;
    expect(stationNames).toMatchInAnyOrder([station1.name, station3.name]);
  });
});
