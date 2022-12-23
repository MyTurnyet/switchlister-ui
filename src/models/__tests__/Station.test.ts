import { Station } from '../Station';
import { station0State } from '../../test-configuration/FixtureTrains';

describe('station', () => {
  it('has name and Id', () => {
    const station = new Station(station0State);
    expect(station.name).toEqual('station0');
    expect(station.block).toEqual('');
    expect(station.id).toEqual(station0State.id);
  });
});
