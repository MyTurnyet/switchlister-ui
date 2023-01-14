import { Route } from '../Route';
import { Station } from '../Station';
import { station1 } from '../../test-configuration/FixtureTrains';

describe('Route', () => {
  it('has one stations', () => {
    const route: Route = new Route([station1]);
    const stations: Station[] = route.stations;
    expect(stations).toHaveLength(1);
  });
  it('should throw if empty array is passed', () => {
    expect(() => {
      new Route([]);
    }).toThrowError(new Error('A Route must have at least one station.'));
  });
});
