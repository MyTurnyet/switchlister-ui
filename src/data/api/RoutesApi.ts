import { axiosRequests } from './AxiosRequests';
import { RouteState } from '../../models/TrainRoute';

export const RoutesApi = {
  getRoutes: (): Promise<RouteState[]> => axiosRequests.get('routes'),
};
