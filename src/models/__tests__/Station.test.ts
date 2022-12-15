import { Station, StationState } from '../Station';
import { IndustryCollection } from '../collections/IndustryCollection';
import {
  createStationState,
  industryXmHtNoCarsState,
  station0State,
} from '../../test-configuration/FixtureTrains';

describe('station', () => {
  it('with 0 industries', () => {
    const station = new Station(station0State);
    expect(station.name).toEqual('station0');
    expect(station.id).toEqual(station0State.id);
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
