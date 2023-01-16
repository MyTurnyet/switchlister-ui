import { RouteState } from '../../models/Route';
import { ApiHandler } from './ApiHandler';

const routesToReturn: RouteState[] = [];

export const defaultGetRoutes = ApiHandler.createApiGet<RouteState[]>('routes', routesToReturn);
