import { Itinerary } from '../Itinerary';
import {
  createTrainFromState,
  station1,
  train1State,
} from '../../test-configuration/FixtureTrains';
import { Route } from '../Route';
import { Train } from '../Train';

describe('Itinerary', () => {
  let train: Train;
  let itinerary: Itinerary;
  const route = new Route([station1]);

  beforeEach(() => {
    train = createTrainFromState(train1State);
    itinerary = new Itinerary(train, route);
  });
  it('takes a train and a route', () => {
    const trainLocation = itinerary.currentTrainLocation();
    expect(trainLocation).toEqual(station1);
  });
});
