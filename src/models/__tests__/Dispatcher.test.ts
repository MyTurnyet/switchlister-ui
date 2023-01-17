import { Dispatcher } from '../Dispatcher';
import { train1 } from '../../test-configuration/FixtureTrains';
import { routeLocal } from '../../test-configuration/FixtureRoutes';

describe('Dispatcher', () => {
  it('places train at current route starting station', () => {
    const dispatcher = new Dispatcher(train1, routeLocal);
    expect(train1.currentLocation).toEqual(routeLocal.stationsCollection.first());
  });
});
