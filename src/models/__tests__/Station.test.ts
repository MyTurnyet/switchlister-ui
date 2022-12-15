import { Station, StationState } from '../Station';
import { IndustryCollection } from '../collections/IndustryCollection';
import {
  createStationState,
  industryXmHtNoCarsState,
} from '../../test-configuration/FixtureTrains';

describe('station', () => {
  it('with 0 industries', () => {
    const stationState: StationState = createStationState('Test Station', []);
    const station = new Station(stationState);
    expect(station.name).toEqual('Test Station');
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.isEmpty()).toEqual(true);
  });
  it('with 1 industry', () => {
    const stationState: StationState = createStationState('Test Station', [
      industryXmHtNoCarsState,
    ]);
    const station = new Station(stationState);
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.count).toEqual(1);
  });
});
