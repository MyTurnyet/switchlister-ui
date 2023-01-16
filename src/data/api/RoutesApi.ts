import { axiosRequests } from './AxiosRequests';
import { RouteState } from '../../models/Route';

export const RoutesApi = {
  getRoutes: (): Promise<RouteState[]> => axiosRequests.get('routes'),
};
