import { Dispatcher } from '../Dispatcher';
import { routeLocal } from '../../test-configuration/FixtureRoutes';
import { Train } from '../Train';
import { train1 } from '../../test-configuration/FixtureTrains';

describe('Dispatcher', () => {
  let dispatcher: Dispatcher;
  let localSwitcher: Train;
  beforeEach(() => {
    localSwitcher = train1;
    dispatcher = new Dispatcher(routeLocal);
  });
  it('places train at current route starting station when assigned', () => {
    dispatcher.assignTrain(localSwitcher);
    expect(localSwitcher.currentLocation).toEqual(routeLocal.stations.first());
  });
  it('finds first car available', () => {});
});
