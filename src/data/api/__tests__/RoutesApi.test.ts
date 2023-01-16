import { mswServer } from '../../../api-mocks/msw-server';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { RouteState } from '../../../models/Route';
import { RoutesApi } from '../RoutesApi';

describe('Routes Api', () => {
  it('returns no routes', async () => {
    mswServer.use(ApiHandler.createApiGet<RouteState[]>('routes', []));
    const routeStates: RouteState[] = await RoutesApi.getRoutes();
    expect(routeStates).toHaveLength(0);
  });
  it('returns 2 routes', async () => {
    const routeStates: RouteState[] = await RoutesApi.getRoutes();
    expect(routeStates).toHaveLength(2);
  });
});
