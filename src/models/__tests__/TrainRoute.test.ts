import { RouteState, TrainRoute } from '../TrainRoute';
import { Station } from '../Station';
import { station1State } from '../../test-configuration/FixtureStations';

describe('Train Route', () => {
  it('has correct values', () => {
    const testRouteName = 'Test Route Name';
    const routeState: RouteState = {
      id: '1234',
      name: testRouteName,
      stations: [station1State],
    };
    const route: TrainRoute = new TrainRoute(routeState);
    expect(route.name).toEqual(testRouteName);
    const stations: Station[] = route.stations;
    expect(stations).toHaveLength(1);
    expect(route.stationsCollection.count).toEqual(1);
  });
});
