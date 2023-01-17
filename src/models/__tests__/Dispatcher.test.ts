import { Dispatcher } from '../Dispatcher';
import { createTrainFromState, train1State } from '../../test-configuration/FixtureTrains';
import { routeLocal } from '../../test-configuration/FixtureRoutes';
import { Train } from '../Train';

describe('Dispatcher', () => {
  it('places train at current route starting station', () => {
    const dispatcher = new Dispatcher(routeLocal);
    const localSwitcher: Train = createTrainFromState(train1State);
    dispatcher.assignTrain(localSwitcher);
    expect(localSwitcher.currentLocation).toEqual(routeLocal.stationsCollection.first());
  });
});
