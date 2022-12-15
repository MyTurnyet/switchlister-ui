import { Station, StationState } from '../Station';
import { IndustryCollection } from '../collections/IndustryCollection';
import {
  industryXmHtNoCarsState,
  station1,
  station1State,
} from '../../test-configuration/FixtureTrains';

describe('station', () => {
  it('with 0 industries', () => {
    const stationState: StationState = { industries: [], name: 'Test Station' };
    const station = new Station(stationState);
    expect(station.name).toEqual('Test Station');
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.isEmpty()).toEqual(true);
  });
  it('with 1 industry', () => {
    const stationState: StationState = {
      industries: [industryXmHtNoCarsState],
      name: 'Test Station',
    };
    const station = new Station(stationState);
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.count).toEqual(1);
  });

  it('returns state to upload', () => {
    const actualState: StationState = station1.asStationState();
    expect(actualState).toEqual(station1State);
  });
});
