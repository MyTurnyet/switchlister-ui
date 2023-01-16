import { Route, RouteState } from '../models/Route';
import { v4 as uuidv4 } from 'uuid';
import { station1State, station3State } from './FixtureStations';
import { StationState } from '../models/Station';

function createRouteState(name: string, stations: StationState[]) {
  return {
    id: uuidv4(),
    name,
    stations,
  };
}
export const routeStateLocal: RouteState = createRouteState('Local', [station1State]);

export const routeStateTwoStation: RouteState = createRouteState('Two Station', [
  station1State,
  station3State,
]);

export const routeLocal: Route = new Route(routeStateLocal);
export const routeTwoStation: Route = new Route(routeStateTwoStation);
