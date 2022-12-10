import { Station, StationState } from '../Station';
import { Industry, IndustryState } from '../Industry';

describe('station', () => {
  it('with 0 industries', () => {
    const stationState: StationState = { industries: [], name: 'Test Station' };
    const station = new Station(stationState);
    expect(station.name).toEqual('Test Station');
    const industryCollection: Industry[] = station.industries;
    expect(industryCollection).toHaveLength(0);
  });
  it('with 1 industry', () => {
    const industry1: IndustryState = { name: 'Industry 1' };
    const stationState: StationState = { industries: [industry1], name: 'Test Station' };
    const station = new Station(stationState);
    const industryCollection: Industry[] = station.industries;
    expect(industryCollection).toHaveLength(1);
  });
});
