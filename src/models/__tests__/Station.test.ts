import { Station, StationState } from '../Station';
import { IndustryState } from '../Industry';
import { IndustryCollection } from '../collections/IndustryCollection';

describe('station', () => {
  it('with 0 industries', () => {
    const stationState: StationState = { industries: [], name: 'Test Station' };
    const station = new Station(stationState);
    expect(station.name).toEqual('Test Station');
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.isEmpty()).toEqual(true);
  });
  it('with 1 industry', () => {
    const industry1: IndustryState = { name: 'Industry 1' };
    const stationState: StationState = { industries: [industry1], name: 'Test Station' };
    const station = new Station(stationState);
    const industryCollection: IndustryCollection = station.industries;
    expect(industryCollection.count).toEqual(1);
  });
});
