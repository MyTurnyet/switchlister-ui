import { RouteState } from '../../models/Route';
import { ApiHandler } from './ApiHandler';
import { routeStateLocal, routeStateTwoStation } from '../../test-configuration/FixtureRoutes';

const routesToReturn: RouteState[] = [routeStateLocal, routeStateTwoStation];

export const defaultGetRoutes = ApiHandler.createApiGet<RouteState[]>('routes', routesToReturn);
