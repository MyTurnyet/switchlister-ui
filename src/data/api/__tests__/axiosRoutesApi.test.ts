import { mswServer } from '../../../api-mocks/msw-server';
import { ApiHandler } from '../../../api-mocks/handlers/ApiHandler';
import { RouteState } from '../../../models/TrainRoute';
import { axiosRoutesApi } from '../AxiosRoutesApi';

describe('Routes Api', () => {
  it('returns no routes', async () => {
    mswServer.use(ApiHandler.createApiGet<RouteState[]>('routes', []));
    const routeStates: RouteState[] = await axiosRoutesApi.getRoutes();
    expect(routeStates).toHaveLength(0);
  });
  it('returns 2 routes', async () => {
    const routeStates: RouteState[] = await axiosRoutesApi.getRoutes();
    expect(routeStates).toHaveLength(2);
  });
});
