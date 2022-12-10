import { Train } from '../Train';
import { station1, station2 } from '../../test-configuration/FixtureTrains';

describe('Train', () => {
  const train = new Train({ id: 'foo!', name: 'train name', stations: [] });
  it('always has a name', () => {
    expect(train.name).toEqual('train name');
  });

  it('returns empty list of station names by default', () => {
    expect(train.stationNames.length).toEqual(0);
  });

  it('has a list of defined station names', () => {
    const expectedNames: string[] = [station1.name, station2.name];
    const train = new Train({ id: 'foo!', name: 'test name', stations: [station1, station2] });
    const stationNames: string[] = train.stationNames;
    expect(stationNames).toEqual(expectedNames);
  });
});
