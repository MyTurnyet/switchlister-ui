import { Train } from '../Train';

describe('Train', () => {
  it('always has a name', () => {
    const train = new Train('test name');
    expect(train.name).toEqual('test name');
  });

  it('returns empty list of station names by default', () => {
    const train = new Train('test name');
    const stationNames: string[] = train.stationNames;
    expect(stationNames.length).toEqual(0);
  });

  it('has a list of defined station names', () => {
    const expectedNames: string[] = ['station 1', 'station 2'];
    const train = new Train('test name', expectedNames);
    const stationNames: string[] = train.stationNames;
    expect(stationNames).toEqual(expectedNames);
  });
});
