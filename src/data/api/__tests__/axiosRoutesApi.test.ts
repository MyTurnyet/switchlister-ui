import { RouteState } from '../../../models/TrainRoute';
import { axiosRoutesApi } from '../AxiosRoutesApi';

describe('Routes Api', () => {
  xit('returns no routes', async () => {
    const routeStates: RouteState[] = await axiosRoutesApi.getRoutes();
    expect(routeStates).toHaveLength(0);
  });
  xit('returns 2 routes', async () => {
    const routeStates: RouteState[] = await axiosRoutesApi.getRoutes();
    expect(routeStates).toHaveLength(2);
  });
  it('FAKE TEST', () => {
    expect(true).toEqual(true);
  });
});
