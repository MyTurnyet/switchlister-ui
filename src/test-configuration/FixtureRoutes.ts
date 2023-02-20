import { RouteState, TrainRoute } from '../models/TrainRoute';
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

export const routeStateTwoStation: RouteState = createRouteState('Two Station Turn', [
  station1State,
  station3State,
]);

export const routeStation1Local: TrainRoute = new TrainRoute(routeStateLocal);
export const routeTwoStation: TrainRoute = new TrainRoute(routeStateTwoStation);
