import { Train } from '../Train';

describe('Train', () => {
  const train = new Train({ name: 'train name', stations: [] });
  it('always has a name', () => {
    expect(train.name).toEqual('train name');
  });

  it('returns empty list of station names by default', () => {
    expect(train.stationNames.length).toEqual(0);
  });

  it('has a list of defined station names', () => {
    const expectedNames: string[] = ['station 1', 'station 2'];
    const train = new Train({ name: 'test name', stations: expectedNames });
    const stationNames: string[] = train.stationNames;
    expect(stationNames).toEqual(expectedNames);
  });
});
