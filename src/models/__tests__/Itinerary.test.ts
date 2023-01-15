import { Itinerary } from '../Itinerary';
import {
  createTrainFromState,
  station1,
  station1State,
  train1State,
} from '../../test-configuration/FixtureTrains';
import { Route, RouteState } from '../Route';
import { Train } from '../Train';

describe('Itinerary', () => {
  let train: Train;
  let itinerary: Itinerary;
  const routeState: RouteState = { id: '', name: '', stations: [station1State] };
  const route = new Route(routeState);

  beforeEach(() => {
    train = createTrainFromState(train1State);
    itinerary = new Itinerary(train, route);
  });
  it('takes a train and a route', () => {
    const trainLocation = itinerary.currentTrainLocation();
    expect(trainLocation).toEqual(station1);
  });
});
