import { Itinerary } from '../Itinerary';
import { train1 } from '../../test-configuration/FixtureTrains';
import { RouteState, TrainRoute } from '../TrainRoute';
import { Train } from '../Train';
import {
  station1,
  station1State,
  station2,
  station2State,
} from '../../test-configuration/FixtureStations';

describe('Itinerary', () => {
  let train: Train;
  let itinerary: Itinerary;

  describe('with only on station', () => {
    const routeState: RouteState = {
      id: 'someId',
      name: 'Local Switcher',
      stations: [station1State],
    };
    const route = new TrainRoute(routeState);
    beforeEach(() => {
      train = train1;
      itinerary = new Itinerary(train, route);
    });
    it('returns correct name', () => {
      expect(itinerary.name).toEqual('Local Switcher');
    });
    it('current location is first station', () => {
      expect(itinerary.currentTrainLocation()).toEqual(station1);
    });
    it('is at last station', () => {
      expect(itinerary.isAtLastStation()).toEqual(true);
    });
    it('stays at same station when asked to move to next', () => {
      itinerary.moveToNextStation();
      expect(itinerary.currentTrainLocation()).toEqual(station1);
    });
  });
  describe('with multiple stations', () => {
    const routeState: RouteState = { id: '', name: '', stations: [station1State, station2State] };
    const route = new TrainRoute(routeState);
    beforeEach(() => {
      train = train1;
      itinerary = new Itinerary(train, route);
    });

    it('is not at last station', () => {
      expect(itinerary.isAtLastStation()).toEqual(false);
    });
    it('moves to next station', () => {
      itinerary.moveToNextStation();
      expect(itinerary.currentTrainLocation().isEqualTo(station2));
    });
  });
});
