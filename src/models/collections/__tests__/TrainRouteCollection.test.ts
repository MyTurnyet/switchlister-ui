import { TrainRouteCollection } from '../TrainRouteCollection';
import { TrainRoute } from '../../TrainRoute';
import {
  routeLocal,
  routeStateLocal,
  routeStateTwoStation,
  routeTwoStation,
} from '../../../test-configuration/FixtureRoutes';

describe('Train Route Collection', () => {
  describe('find by id', () => {
    it('returns EMPTY_ROUTE if not found', () => {
      const routeCollection = new TrainRouteCollection([]);
      const trainRoute: TrainRoute = routeCollection.findById('some id goes here');
      expect(trainRoute).toEqual(TrainRoute.EMPTY_ROUTE);
    });
    it('returns route with given id', () => {
      const routeCollection = new TrainRouteCollection([routeLocal, routeTwoStation]);
      const trainRoute: TrainRoute = routeCollection.findById(routeTwoStation.id);
      expect(trainRoute).toEqual(routeTwoStation);
    });
  });
  it('creates from TrainRouteState array', () => {
    const trainRouteCollection: TrainRouteCollection =
      TrainRouteCollection.createFromTrainRouteStateArray([routeStateLocal, routeStateTwoStation]);
    expect(trainRouteCollection.count).toEqual(2);
  });
});
