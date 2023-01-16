import { Station } from '../Station';
import { eastBlock, station0State } from '../../test-configuration/FixtureStations';

describe('station', () => {
  it('has name and Id', () => {
    const station = new Station(station0State);
    expect(station.name).toEqual('station0');
    expect(station.block).toEqual(eastBlock);
    expect(station.id).toEqual(station0State.id);
  });
});
