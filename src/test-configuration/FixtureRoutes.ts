import { Route, RouteState } from '../models/Route';
import { station1State, station3State } from './FixtureStations';

export const routeStateLocal: RouteState = {
  id: '123123',
  name: 'Local',
  stations: [station1State],
};
export const routeStateTwoStation: RouteState = {
  id: '123123',
  name: 'Two Station',
  stations: [station1State, station3State],
};

export const routeLocal: Route = new Route(routeStateLocal);
export const routeTwoStation: Route = new Route(routeStateTwoStation);
