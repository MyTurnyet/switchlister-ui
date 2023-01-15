import { Route, RouteState } from '../Route';
import { Station } from '../Station';
import { station1State } from '../../test-configuration/FixtureTrains';

describe('Route', () => {
  it('has one stations', () => {
    const routeState: RouteState = { id: '', name: '', stations: [station1State] };
    const route: Route = new Route(routeState);
    const stations: Station[] = route.stations;
    expect(stations).toHaveLength(1);
    expect(route.stationsCollection.count).toEqual(1);
  });
  it('should throw if empty array is passed', () => {
    expect(() => {
      const emptyRouteState: RouteState = { id: '', name: '', stations: [] };
      new Route(emptyRouteState);
    }).toThrowError(new Error('A Route must have at least one station.'));
  });
});
