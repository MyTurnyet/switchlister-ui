import { Itinerary } from '../Itinerary';
import { train1 } from '../../test-configuration/FixtureTrains';
import { RouteState, TrainRoute } from '../TrainRoute';
import { Train } from '../Train';
import { station1, station1State } from '../../test-configuration/FixtureStations';

describe('Itinerary', () => {
  let train: Train;
  let itinerary: Itinerary;
  const routeState: RouteState = { id: '', name: '', stations: [station1State] };
  const route = new TrainRoute(routeState);

  beforeEach(() => {
    train = train1;
    itinerary = new Itinerary(train, route);
  });
  it('takes a train and a route', () => {
    const trainLocation = itinerary.currentTrainLocation();
    expect(trainLocation).toEqual(station1);
  });
});
