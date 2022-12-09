import { Station, StationState } from '../Station';

describe('station', () => {
  it('creates', () => {
    const stationState: StationState = { industries: [], name: 'Test Station' };
    const station = new Station(stationState);
    expect(station.name).toEqual('Test Station');
  });
});
