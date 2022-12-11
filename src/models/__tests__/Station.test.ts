import { Station, StationState } from '../Station';
import { IndustryCollection } from '../collections/IndustryCollection';
import { industry1State } from '../../test-configuration/FixtureTrains';

describe('station', () => {
  it('with 0 industries', () => {
    const stationState: StationState = { industries: [], name: 'Test Station' };
    const station = new Station(stationState);
    expect(station.name).toEqual('Test Station');
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.isEmpty()).toEqual(true);
  });
  it('with 1 industry', () => {
    const stationState: StationState = { industries: [industry1State], name: 'Test Station' };
    const station = new Station(stationState);
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.count).toEqual(1);
  });
});
