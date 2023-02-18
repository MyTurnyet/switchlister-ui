import { eastBlock, station0State } from '../../test-configuration/FixtureStations';
import { StationBuilder } from '../StationBuilder';

describe('station', () => {
  it('has name and Id', () => {
    const station = new StationBuilder()
      .stationName('station0')
      .blockName(eastBlock)
      .id('foo!')
      .toStation();
    expect(station.name).toEqual('station0');
    expect(station.block).toEqual(eastBlock);
    expect(station.id).toEqual('foo!');
  });
});
