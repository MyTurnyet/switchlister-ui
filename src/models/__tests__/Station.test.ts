import { Station, StationState } from '../Station';
import { IndustryCollection } from '../collections/IndustryCollection';
import {
  createStationState,
  industry1State,
  station0State,
} from '../../test-configuration/FixtureTrains';

describe('station', () => {
  it('has name and Id', () => {
    const station = new Station(station0State);
    expect(station.name).toEqual('station0');
    expect(station.id).toEqual(station0State.id);
  });
});
