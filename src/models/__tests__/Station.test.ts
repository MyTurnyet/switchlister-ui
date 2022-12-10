import { Station, StationState } from '../Station';
import { Industry } from '../Industry';

describe('station', () => {
  it('with 0 industries', () => {
    const stationState: StationState = { industries: [], name: 'Test Station' };
    const station = new Station(stationState);
    expect(station.name).toEqual('Test Station');
    const industryCollection: Industry[] = station.industries;
    expect(industryCollection).toHaveLength(0);
  });
});
