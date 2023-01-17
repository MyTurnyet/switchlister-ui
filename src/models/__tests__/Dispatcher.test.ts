import { Dispatcher } from '../Dispatcher';
import { createTrainFromState, train1State } from '../../test-configuration/FixtureTrains';
import { routeLocal } from '../../test-configuration/FixtureRoutes';
import { Train } from '../Train';

describe('Dispatcher', () => {
  let dispatcher: Dispatcher;
  let localSwitcher: Train;
  beforeEach(() => {
    localSwitcher = createTrainFromState(train1State);
    dispatcher = new Dispatcher(routeLocal);
  });
  it('places train at current route starting station when assigned', () => {
    dispatcher.assignTrain(localSwitcher);
    expect(localSwitcher.currentLocation).toEqual(routeLocal.stationsCollection.first());
  });
});
