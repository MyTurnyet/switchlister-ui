import { RouteState, TrainRoute } from '../TrainRoute';
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
    expect(route.stationsCollection.count).toEqual(1);
  });
});
